import { View, Text } from "react-native";
import React, { memo, useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";
import { TimelineText, TimelineWrapper } from "./style";
import {
  CurrWeatherWrapper,
  DayInfo,
  ResumeWrapper,
  TodayText,
} from "../resume/style";

const Timeline = () => {
  const { state } = useContext(GlobalContext);
  const { hour } = state?.forecast?.forecastday?.[0] || [];
  console.log("HourRRR", hour);
  return (
    <ResumeWrapper>
      <CurrWeatherWrapper>
        <DayInfo>
          <TodayText>Hoje</TodayText>
        </DayInfo>
        <TimelineText>Timeline</TimelineText>
      </CurrWeatherWrapper>
    </ResumeWrapper>
  );
};

export default Timeline;
