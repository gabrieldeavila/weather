import { ActivityIndicator, Dimensions, View } from "react-native";
import styled from "styled-components/native";
import { colors } from "./colors";
import { flex } from "./mixins";

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

const LoadingIndicatorWrapper = styled.View`
  width: 100%;
  height: ${Dimensions.get("window").height}px;
  ${flex};
`;

export const LoadingIndicator = () => {
  return (
    <LoadingIndicatorWrapper>
      <ActivityIndicator size="large" color={colors.tertiary} />
    </LoadingIndicatorWrapper>
  );
};
