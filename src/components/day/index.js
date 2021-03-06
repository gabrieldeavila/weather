import React, { useCallback, useContext } from "react";
import { Ball } from "../../base/components";
import { GlobalContext } from "../../contexts/globalContext";
import { DayOptionWrapper, DayWrapper, TimeDayText } from "./style";
import { colors } from "./../../base/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { navigate } from "../../routes/RootNavigation";

const Day = () => {
  const { mode, setMode } = useContext(GlobalContext);

  const handlePress = useCallback((e) => {
    setMode(e);
  }, []);

  const handleNavigate = useCallback(() => {
    navigate("MoreDays");
  }, []);

  return (
    <DayWrapper>
      <DayOptionWrapper onPress={() => handlePress("TODAY")}>
        <TimeDayText>Hoje</TimeDayText>
        {mode === "TODAY" && <Ball />}
      </DayOptionWrapper>

      <DayOptionWrapper onPress={() => handlePress("TOMORROW")}>
        <TimeDayText>Amanhã</TimeDayText>
        {mode === "TOMORROW" && <Ball />}
      </DayOptionWrapper>

      <DayOptionWrapper onPress={handleNavigate}>
        <TimeDayText highlight>Próximos 3 dias</TimeDayText>
        <Ionicons
          name="arrow-forward-outline"
          size={22}
          color={colors.secondary}
        />
      </DayOptionWrapper>
    </DayWrapper>
  );
};

export default Day;
