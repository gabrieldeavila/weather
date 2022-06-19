import { View, Text } from "react-native";
import React, { memo } from "react";
import { HeaderWrapper, InfoText } from "./style";

const Info = ({ day }) => {
  const { daily_chance_of_rain, avgvis_km, uv, avghumidity } = day || {};

  return (
    <HeaderWrapper>
      <View>
        <InfoText>Chuva</InfoText>
        <InfoText>{daily_chance_of_rain}%</InfoText>
      </View>

      <View>
        <InfoText>Visibilidade</InfoText>
        <InfoText>{avgvis_km}km</InfoText>
      </View>

      <View>
        <InfoText>UV</InfoText>
        <InfoText>{uv}</InfoText>
      </View>

      <View>
        <InfoText>Humidade</InfoText>
        <InfoText>{avghumidity}%</InfoText>
      </View>
    </HeaderWrapper>
  );
};

export default memo(Info);
