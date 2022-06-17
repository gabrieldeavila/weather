import React, { memo, useContext, useMemo } from "react";
import { GlobalContext } from "../../contexts/globalContext";
import { TempContainer, TempText, TempTextCelsius } from "./style";

const Temp = () => {
  const { state } = useContext(GlobalContext);
  const { temp_c } = state?.current || {};

  const value = useMemo(() => parseFloat(temp_c, 0).toFixed(0), [temp_c]);

  return (
    <TempContainer>
      <TempText>{value}</TempText>
      <TempTextCelsius>°C</TempTextCelsius>
    </TempContainer>
  );
};

export default memo(Temp);
