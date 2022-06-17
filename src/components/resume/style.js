import styled from "styled-components/native";
import { Container, Text } from "../../base/style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../base/colors";
import { flex } from "../../base/mixins";

export const ResumeWrapper = styled(Container)``;

export const CurrWeatherWrapper = styled.View`
  ${flex}
`;

export const Condition = styled.View`
  margin-right: 10px;
`;

export const ConditionIcon = ({ name }) => {
  return <Ionicons name={name} size={32} color={colors.tertiary} />;
};

export const DayInfo = styled.View``;

const StyledTodayText = styled(Text)`
  text-transform: capitalize;
`;

export const TodayText = ({ children, ...props }) => {
  return (
    <StyledTodayText
      color="tertiary"
      font="regular"
      size="extra_extra_large"
      {...props}
    >
      {children}
    </StyledTodayText>
  );
};

const StyledWeekDayText = styled(StyledTodayText)`
  font-size: 12px;
`;

export const WeekDayText = ({ children, ...props }) => {
  return (
    <StyledWeekDayText color="tertiary" font="regular" size="medium" {...props}>
      {children}
    </StyledWeekDayText>
  );
};

export const TempContainer = styled.View`
  margin-top: 10px;
  ${flex}
`;

const StyledTempText = styled(Text)`
  margin-right: 10px;
`;

export const TempText = ({ children, ...props }) => {
  return (
    <StyledTempText
      color="tertiary"
      font="regular"
      size="super_large"
      {...props}
    >
      {children}
    </StyledTempText>
  );
};

const StyledTempTextCelsius = styled(Text)``;

export const TempTextCelsius = ({ children, ...props }) => {
  return (
    <StyledTempTextCelsius
      color="tertiary"
      font="light"
      size="medium"
      {...props}
    >
      {children}
    </StyledTempTextCelsius>
  );
};

export const PlaceWrapper = styled.View`
  margin-top: 10px;
  ${flex};
`;

const StyledPlaceText = styled(Text)``;

export const PlaceText = ({ children, ...props }) => {
  return (
    <StyledPlaceText color="tertiary" font="regular" size="medium" {...props}>
      {children}
    </StyledPlaceText>
  );
};
