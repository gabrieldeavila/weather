import React, { memo } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Container, Text } from "../../base/style";
import { NavbarContainer, NavbarTextWrapper } from "./style";
import { colors } from "./../../base/colors";

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
