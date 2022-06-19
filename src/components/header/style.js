import styled from "styled-components/native";
import { colors } from "../../base/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { goBack } from "../../routes/RootNavigation";

export const HeaderWrapper = styled.View`
  padding: 10px;
`;

export const HeaderIconWrapper = styled.TouchableOpacity`
  margin-bottom: 10px;
`;

export const HeaderIcon = (props) => {
  return (
    <HeaderIconWrapper onPress={goBack}>
      <Ionicons size={30} color={colors.tertiary} {...props} />
    </HeaderIconWrapper>
  );
};
