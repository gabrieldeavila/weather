import React, { useContext } from "react";
import { Container, Text } from "../../base/style";
import GeneralInfo from "../../components/generalInfo";
import Header from "../../components/header";
import { GlobalContext } from "../../contexts/globalContext";

const MoreDays = () => {
  const { state } = useContext(GlobalContext);

  const forecast = state?.forecast?.forecastday;

  return (
    <Container>
      <Header />
      <GeneralInfo {...forecast[0]} />
      <GeneralInfo {...forecast[1]} />
      <GeneralInfo {...forecast[2]} />
    </Container>
  );
};

export default MoreDays;
