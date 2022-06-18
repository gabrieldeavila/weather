import React, {
  memo,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { TimeText, TimeWrapper } from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { fixedTemp, getCurrConditionIcon, getTime } from "../../helpers";
import { colors } from "../../base/colors";
import { boxShadow } from "../../base/mixins";
import { GlobalContext } from "../../contexts/globalContext";

const Time = ({ condition, time, temp_c, scrollRef }) => {
  const { mode } = useContext(GlobalContext);

  const { text } = condition || {};

  const hour = useMemo(() => getTime(time), [time]);
  const name = useMemo(() => getCurrConditionIcon(text), [text]);
  const temp = useMemo(() => fixedTemp(temp_c), [temp_c]);

  const isCurrHour = useMemo(() => {
    const now = new Date();
    const nowHour = getTime(now);

    return hour === nowHour && mode === "TODAY";
  }, [hour, mode]);

  const color = useMemo(() => {
    return isCurrHour ? "secondary" : "tertiary";
  }, [isCurrHour]);

  const [layout, setLayout] = useState();

  useEffect(() => {
    if (isCurrHour && mode === "TODAY") {
      scrollRef?.scrollTo?.({
        ...layout,
        animated: true,
      });
    }
  }, [hour, scrollRef, layout, mode]);

  return (
    <TimeWrapper
      onLayout={(event) => {
        const layout = event.nativeEvent.layout;
        setLayout(layout);
      }}
      isCurrHour={isCurrHour}
      style={boxShadow}
    >
      <TimeText light marginBottom color={color}>
        {hour}
      </TimeText>

      <Ionicons
        name={name}
        size={32}
        color={isCurrHour ? colors.secondary : colors.tertiary}
      />

      <TimeText marginTop color={color}>
        {temp}°C
      </TimeText>
    </TimeWrapper>
  );
};

export default memo(Time);
