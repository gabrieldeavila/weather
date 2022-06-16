import { createContext, useEffect, useState } from "react";
import * as Location from "expo-location";
import { apiForecast } from "./../api/index";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    let params = {
      q: "-29.1612143,-51.5044158",
    };
    apiForecast("", { params })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // axios
    //   .get(
    //     `http://api.weatherapi.com/v1/sports.json?key=a72514354c3f440488f03541221606&q=`
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   });
  }, [location]);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
