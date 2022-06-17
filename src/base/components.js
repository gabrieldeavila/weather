import styled from "styled-components/native";
import { colors } from "./colors";

const sizes = {
  small: 5,
  medium: 10,
  large: 15,
};

export const Ball = styled.View`
  width: ${({ size }) => sizes[size] || 5}px;
  height: 5px;
  border-radius: 2.5px;
  background: ${colors.tertiary};
`;

export const Space = styled.View`
  width: ${({ size }) => sizes[size] || 10}px;
  height: ${({ size }) => sizes[size] || 5}px;
`;
