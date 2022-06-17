import styled from "styled-components/native";
import { flex } from "../../base/mixins";
import { Text } from "../../base/style";

export const TimelineWrapper = styled.View`
  width: 100%;
  height: 200px;
  background: red;
  ${flex}
`;

const StyledTimelineText = styled(Text)``;

export const TimelineText = ({ children, ...props }) => {
  console.log(children);
  return (
    <StyledTimelineText color="tertiary" font="regular" size="small" {...props}>
      {children} UGAUGAUGAUUGA
    </StyledTimelineText>
  );
};
