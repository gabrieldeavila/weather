import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "./../../base/colors";
import { flex } from "./../../base/mixins";

export const NavbarContainer = styled(SafeAreaView)`
  ${flex};
  background-color: ${colors.primary};
  padding: 20px;
`;

export const NavbarTextWrapper = styled.View`
  width: auto;
  align-items: center;
  flex-grow: 1;
`;
