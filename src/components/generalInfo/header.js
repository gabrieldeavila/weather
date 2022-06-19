import { View, Text } from "react-native";
import React, { memo, useMemo } from "react";
import {
  HeaderIcon,
  HeaderInfoWrapper,
  HeaderWrapper,
  InfoText,
} from "./style";
import { fixedTemp, getCurrConditionIcon, getDayName } from "../../helpers";

const GeneralInfoHeader = ({ date, day }) => {
  const dayName = useMemo(() => getDayName(`${date} 23:59`), [date]);

  const { text } = day?.condition || {};
  const { maxtemp_c, mintemp_c } = day || {};

  const maxTemp = useMemo(() => fixedTemp(maxtemp_c), [maxtemp_c]);
  const minTemp = useMemo(() => fixedTemp(mintemp_c), [mintemp_c]);
  const icon = useMemo(() => getCurrConditionIcon(text), [text]);

  return (
    <HeaderWrapper>
      <HeaderInfoWrapper>
        <InfoText>{dayName}</InfoText>
        <HeaderIcon name={icon} />
      </HeaderInfoWrapper>

      <HeaderInfoWrapper>
        <InfoText size="extra_extra_large">{maxTemp}°C</InfoText>
        <InfoText font="light">{minTemp}°C</InfoText>
      </HeaderInfoWrapper>
    </HeaderWrapper>
  );
};

export default memo(GeneralInfoHeader);
