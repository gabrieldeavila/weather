import React, { memo } from "react";
import { GeneralInfoContainer, GeneralInfoWrapper, InfoText } from "./style";
import GeneralInfoHeader from "./header";
import Info from "./info";

const GeneralInfo = (props) => {
  return (
    <GeneralInfoWrapper>
      <GeneralInfoContainer>
        <GeneralInfoHeader {...props} />
        <Info {...props} />
      </GeneralInfoContainer>
    </GeneralInfoWrapper>
  );
};

export default memo(GeneralInfo);
