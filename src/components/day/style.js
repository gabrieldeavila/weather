import styled from "styled-components/native";
import { flex } from "../../base/mixins";
import { Text } from "../../base/style";

export const DayWrapper = styled.View`
  ${flex};
  padding: 0 10px;
  align-items: flex-start;
  margin-top: 30px;
`;

const StyledDayText = styled(Text)`
  margin-bottom: ${({ highlight }) => (highlight ? 0 : 10)}px;
`;

export const TimeDayText = ({ children, ...props }) => {
  return (
    <StyledDayText
      color={props.highlight ? "secondary" : "tertiary"}
      font="large"
      size="medium"
      {...props}
    >
      {children}
    </StyledDayText>
  );
};

export const DayOptionWrapper = styled.TouchableOpacity`
  width: auto;
  flex-grow: 1;
  margin: 0 5px;
  align-items: center;
`;
