import { View, Text } from "react-native";
import React, { memo, useContext, useMemo } from "react";
import { FeelsLikeText, FeelsLikeWrapper } from "./style";
import { GlobalContext } from "../../contexts/globalContext";
import { fixedTemp } from "../../helpers";
import { Ball } from "../../base/components";

const FeelsLike = () => {
  const { state } = useContext(GlobalContext);
  const { feelslike_c } = state?.current || {};
  const { sunset } = state?.forecast?.forecastday?.[0]?.astro || {};

  const value = useMemo(() => fixedTemp(feelslike_c), [feelslike_c]);

  console.log(state);

  return (
    <FeelsLikeWrapper>
      <FeelsLikeText>Sensação de {value}°C</FeelsLikeText>
      <Ball />
      <FeelsLikeText>Por do sol às {sunset}</FeelsLikeText>
    </FeelsLikeWrapper>
  );
};

export default memo(FeelsLike);
