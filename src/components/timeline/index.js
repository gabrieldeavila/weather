import { View, ScrollView, TouchableOpacity } from "react-native";
import React, { memo, useCallback, useContext, useRef, useState } from "react";
import { GlobalContext } from "../../contexts/globalContext";
import { TimelineText, TimelineWrapper } from "./style";
import {
  CurrWeatherWrapper,
  DayInfo,
  ResumeWrapper,
  TodayText,
} from "../resume/style";
import Time from "./time";
import { Space } from "../../base/components";
import { Text } from "../../base/style";

const Timeline = () => {
  const { state } = useContext(GlobalContext);
  const { hour } = state?.forecast?.forecastday?.[0] || [];

  const [ref, setRef] = useState(null);

  return (
    <TimelineWrapper
      scrollRef={(ref) => {
        setRef(ref);
      }}
    >
      <Space />
      {hour?.map((item, index) => (
        <Time key={index} scrollRef={ref} {...item} />
      ))}
      <Space />
    </TimelineWrapper>
  );
};

export default Timeline;
