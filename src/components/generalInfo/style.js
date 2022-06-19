import styled from "styled-components/native";
import { flex } from "../../base/mixins";
import { Text } from "../../base/style";
import { colors } from "./../../base/colors";

export const GeneralInfoWrapper = styled.View`
  margin: 30px 10px;
`;

export const GeneralInfoContainer = styled.View`
  background: ${colors.secondary};
  padding: 10px;
  border-radius: 5px;
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
  justify-content: space-between;
`;

export const HeaderInfoWrapper = styled.View`
  flex-direction: row;
`;
