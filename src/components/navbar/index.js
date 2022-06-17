import React, { memo } from "react";
import { NavbarContainer, NavbarTextWrapper } from "./style";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarTextWrapper>
        {/* <Text size="extra_large" font="medium" color="tertiary">
          Previsão do Tempo
        </Text> */}
      </NavbarTextWrapper>
    </NavbarContainer>
  );
};

export default memo(Navbar);
