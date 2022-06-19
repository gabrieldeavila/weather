import styled from "styled-components/native";
import { flex } from "../../base/mixins";
import { Text } from "../../base/style";
import { colors } from "./../../base/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export const GeneralInfoWrapper = styled.View`
  margin: 30px 10px;
`;

export const GeneralInfoContainer = styled.View`
  background: ${colors.secondary};
  border-radius: 5px;
  padding: 30px;
`;

const StyledInfoText = styled(Text)`
  text-transform: capitalize;
  margin: 0 5px;
`;

export const InfoText = ({ children, ...props }) => {
  return (
    <StyledInfoText color="tertiary" font="bold" size="extra_large" {...props}>
      {children}
    </StyledInfoText>
  );
};

export const HeaderWrapper = styled.View`
  width: 100%;
  ${flex};
  margin-bottom: 20px;
  justify-content: space-between;
`;

export const HeaderIconWrapper = styled.View`
  margin-left: 10px;
`;

export const HeaderIcon = (props) => {
  return (
    <HeaderIconWrapper>
      <Ionicons size={30} color={colors.tertiary} {...props} />
    </HeaderIconWrapper>
  );
};

export const HeaderInfoWrapper = styled.View`
  ${flex};
`;

export const InfoWrapper = styled.View``;

const StyledInfoTimeText = styled(Text)`
  margin: 0 5px;
  margin-right: ${({ margin }) => (margin ? "20px" : "5px")};
`;

export const InfoTimeText = ({ children, ...props }) => {
  return (
    <StyledInfoTimeText color="tertiary" font="medium" size="medium" {...props}>
      {children}
    </StyledInfoTimeText>
  );
};

export const InfoContainer = styled.View`
  width: 50%;
  ${flex};
  justify-content: space-between;
`;

export const InfoRow = styled.View`
  ${flex};
`;
