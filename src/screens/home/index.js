import React, { useContext, useMemo } from "react";
import { Container } from "../../base/style";
import Resume from "../../components/resume";
import Timeline from "../../components/timeline";
import { GlobalContext } from "../../contexts/globalContext";
import _ from "lodash";
import { LoadingIndicator } from "../../base/components";
import Day from "../../components/day";
import GeneralInfo from "../../components/generalInfo";

const Home = () => {
  const { state, mode } = useContext(GlobalContext);
  const forecastDay = useMemo(() => (mode === "TODAY" ? 0 : 1), [mode]);

  const forecast = state?.forecast?.forecastday?.[forecastDay];

  return (
    <Container>
      {_.isEmpty(state.current) ? (
        <LoadingIndicator />
      ) : (
        <>
          <Resume />
          <Day />
          <Timeline />
          <GeneralInfo {...forecast} />
        </>
      )}
    </Container>
  );
};

export default Home;
