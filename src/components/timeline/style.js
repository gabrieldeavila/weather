import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../base/colors";
import { flex } from "../../base/mixins";
import { Text } from "../../base/style";

const StyledTimelineWrapper = styled.ScrollView`
  margin-top: 30px;
  width: ${Dimensions.get("window").width}px;
`;

export const TimelineWrapper = ({ children, scrollRef, ...props }) => {
  return (
    <StyledTimelineWrapper
      ref={scrollRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      {...props}
      style={{ flexDirection: "row" }}
    >
      {children}
    </StyledTimelineWrapper>
  );
};

const StyledTimelineText = styled(Text)``;

export const TimelineText = ({ children, ...props }) => {
  return (
    <StyledTimelineText color="tertiary" font="regular" size="small" {...props}>
      {children}
    </StyledTimelineText>
  );
};

export const TimeWrapper = styled.View`
  background: ${colors.secondary};
  margin-right: 5px;
  padding: 20px;
  width: 100px;
  border-radius: 5px;
  ${flex};
  flex-direction: column;
`;

export const TimeText = styled(Text)`
  font-family: ${({ light }) =>
    light ? "Inter_200ExtraLight" : "Inter_500Medium"};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? 10 : 0)}px;
  margin-top: ${({ marginTop }) => (marginTop ? 10 : 0)}px;
`;
