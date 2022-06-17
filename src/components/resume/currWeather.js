import React, { memo, useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";
import { getCurrConditionIcon, getCurrDay } from "./../../helpers";
import {
  Condition,
  ConditionIcon,
  CurrWeatherWrapper,
  DayInfo,
  TodayText,
  WeekDayText,
} from "./style";

const CurrWeather = () => {
  const { state } = useContext(GlobalContext);
  const formattedDay = getCurrDay();

  const currCondition = state?.current?.condition?.text;

  let icon = getCurrConditionIcon(currCondition);

  return (
    <CurrWeatherWrapper>
      <Condition>
        <ConditionIcon name={icon} />
      </Condition>
      <DayInfo>
        <TodayText>Hoje</TodayText>
        <WeekDayText>{formattedDay}</WeekDayText>
      </DayInfo>
    </CurrWeatherWrapper>
  );
};

export default memo(CurrWeather);
