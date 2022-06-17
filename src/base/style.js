import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { memo } from "react";
import { fontColors, fontOptions, fontSizes } from "./mixins";
import { colors } from "./colors";

const StyledScrollView = styled.ScrollView``;

const StyledContainer = styled(SafeAreaView)`
  background: ${colors.primary};
  min-height: 100%;
`;

export const Container = memo(({ children, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledScrollView>{children}</StyledScrollView>
    </StyledContainer>
  );
});

export const Text = styled.Text`
  ${fontOptions};
  ${fontColors}
  ${fontSizes}
`;
