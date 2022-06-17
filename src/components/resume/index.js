import React from "react";
import { Text } from "../../base/style";
import CurrWeather from "./currWeather";
import Place from "./place";
import { ResumeWrapper } from "./style";
import Temp from "./temp";

const Resume = () => {
  return (
    <ResumeWrapper>
      <CurrWeather />
      <Temp />
      <Place />
    </ResumeWrapper>
  );
};

export default Resume;
