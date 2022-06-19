import { View, Text } from "react-native";
import React, { memo, useMemo } from "react";
import { HeaderInfoWrapper, HeaderWrapper, InfoText } from "./style";
import { getCurrConditionIcon, getDayName } from "../../helpers";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../base/colors";

const GeneralInfoHeader = ({ date, day }) => {
  const dayName = useMemo(() => getDayName(`${date} 23:59`), [date]);

  const { text } = day?.condition || {};
  const { maxtemp_c, mintemp_c } = day || {};

  const icon = useMemo(() => getCurrConditionIcon(text), [text]);

  return (
    <HeaderWrapper>
      <HeaderInfoWrapper>
        <InfoText>{dayName}</InfoText>
        <Ionicons name={icon} size={30} color={colors.tertiary} />
      </HeaderInfoWrapper>

      <HeaderInfoWrapper>
        <InfoText>{maxtemp_c}°C</InfoText>
        <InfoText>{mintemp_c}°C</InfoText>
      </HeaderInfoWrapper>
    </HeaderWrapper>
  );
};

export default memo(GeneralInfoHeader);
