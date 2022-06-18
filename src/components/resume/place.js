import React, { memo, useContext } from "react";
import { PlaceText, PlaceWrapper } from "./style";
import { GlobalContext } from "../../contexts/globalContext";

const Place = () => {
  const { state } = useContext(GlobalContext);
  const { name: city, country } = state?.location || {};

  return (
    <PlaceWrapper>
      <PlaceText>{`${city}, ${country}`}</PlaceText>
    </PlaceWrapper>
  );
};

export default memo(Place);
