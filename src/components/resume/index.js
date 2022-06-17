import React from "react";
import { Text } from "../../base/style";
import CurrWeather from "./currWeather";
import FeelsLike from "./feelsLike";
import Place from "./place";
import { ResumeWrapper } from "./style";
import Temp from "./temp";

const Resume = () => {
  return (
    <ResumeWrapper>
      <CurrWeather />
      <Temp />
      <Place />
      <FeelsLike />
    </ResumeWrapper>
  );
};

export default Resume;
