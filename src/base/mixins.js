import { css } from "styled-components/native";
import { colors } from "./colors";

const options = {
  thin: "Inter_100Thin",
  extra_light: "Inter_200ExtraLight",
  light: "Inter_300Light",
  regular: "Inter_400Regular",
  medium: "Inter_500Medium",
  semi_bold: "Inter_600SemiBold",
  bold: "Inter_700Bold",
  extra_bold: "Inter_800ExtraBold",
  black: "Inter_900Black",
};

const sizes = {
  small: "12px",
  medium: "14px",
  large: "16px",
  extra_large: "18px",
  extra_extra_large: "24px",
  super_large: "70px",
};

export const fontOptions = css`
  font-family: ${({ font }) => options[font] || "Inter_500Medium"};
`;

export const fontColors = css`
  color: ${({ color }) => colors[color] || colors.tertiary};
`;

export const flex = css`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const fontSizes = css`
  font-size: ${({ size }) => sizes[size] || sizes.medium};
`;
