import { createContext, useEffect, useRef, useState } from "react";
import * as Location from "expo-location";
import { apiForecast } from "./../api/index";
const controller = new AbortController();

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const controllerRef = useRef("");
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
    const { latitude, longitude } = location?.coords || {};

    let params = {
      q: `${latitude},${longitude}`,
    };

    if (!latitude || !longitude) {
      return;
    }

    if (controllerRef.current !== "") {
      controller.abort();
    }

    controllerRef.current = true;

    apiForecast(
      "",
      { params },
      {
        signal: controller.signal,
      }
    )
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
