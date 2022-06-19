import React, { memo } from "react";
import {
  HeaderWrapper,
  InfoContainer,
  InfoRow,
  InfoText,
  InfoTimeText,
  InfoWrapper,
} from "./style";

const Info = ({ day }) => {
  const { daily_chance_of_rain, avgvis_km, uv, avghumidity } = day || {};

  return (
    <InfoWrapper>
      <InfoRow>
        <InfoContainer>
          <InfoTimeText>UV</InfoTimeText>
          <InfoTimeText margin font="light">
            {uv}
          </InfoTimeText>
        </InfoContainer>

        <InfoContainer>
          <InfoTimeText>Visibilidade</InfoTimeText>
          <InfoTimeText font="light">{avgvis_km}km</InfoTimeText>
        </InfoContainer>
      </InfoRow>

      <InfoRow>
        <InfoContainer>
          <InfoTimeText>Humidade</InfoTimeText>
          <InfoTimeText margin font="light">
            {avghumidity}%
          </InfoTimeText>
        </InfoContainer>

        <InfoContainer>
          <InfoTimeText>Chuva</InfoTimeText>
          <InfoTimeText font="light">{daily_chance_of_rain}%</InfoTimeText>
        </InfoContainer>
      </InfoRow>
    </InfoWrapper>
  );
};

export default memo(Info);
