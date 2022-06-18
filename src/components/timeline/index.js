import React, { useContext, useEffect, useMemo, useState } from "react";
import { GlobalContext } from "../../contexts/globalContext";
import { TimelineWrapper } from "./style";
import Time from "./time";
import { Space } from "../../base/components";

const Timeline = () => {
  const { state, mode } = useContext(GlobalContext);
  const forecastDay = useMemo(() => (mode === "TODAY" ? 0 : 1), [mode]);

  const { hour } = state?.forecast?.forecastday?.[forecastDay] || [];

  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (mode === "TOMORROW") {
      ref?.scrollTo?.({
        animated: true,
        x: 0,
      });
    }
  }, [mode]);

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
