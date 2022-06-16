import { css } from "styled-components/native";

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

export const fontOptions = css`
  font-family: ${(props) =>
    options[Object.keys(props || {})?.[1]] || "Inter_500Medium"};
`;
