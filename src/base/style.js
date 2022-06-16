import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { memo } from "react";
import { fontOptions } from "./mixins";

const StyledScrollView = styled.ScrollView``;

const StyledContainer = styled(SafeAreaView)``;

export const Container = memo((props) => {
  return (
    <StyledContainer>
      <StyledScrollView>{props.children}</StyledScrollView>
    </StyledContainer>
  );
});

export const Text = styled.Text`
  ${fontOptions};
`;
