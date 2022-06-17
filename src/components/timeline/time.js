import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { TimeText, TimeWrapper } from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { fixedTemp, getCurrConditionIcon, getTime } from "../../helpers";
import { colors } from "../../base/colors";

const Time = ({ condition, time, temp_c, scrollRef }) => {
  const { text } = condition || {};
  const hour = useMemo(() => getTime(time), [time]);
  const name = useMemo(() => getCurrConditionIcon(text), [text]);
  const temp = useMemo(() => fixedTemp(temp_c), [temp_c]);
  const [layout, setLayout] = useState();

  useEffect(() => {
    const now = new Date();
    const nowHour = getTime(now);

    if (hour === nowHour) {
      scrollRef?.scrollTo?.({
        ...layout,
        animated: true,
      });
    }
  }, [hour, scrollRef, layout]);

  return (
    <TimeWrapper
      onLayout={(event) => {
        const layout = event.nativeEvent.layout;
        setLayout(layout);
      }}
    >
      <TimeText light marginBottom>
        {hour}
      </TimeText>
      <Ionicons name={name} size={32} color={colors.tertiary} />
      <TimeText marginTop>{temp}°C</TimeText>
    </TimeWrapper>
  );
};

export default memo(Time);
