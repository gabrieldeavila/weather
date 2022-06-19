import React, { memo } from "react";
import { Text } from "../../base/style";
import { HeaderIcon, HeaderWrapper } from "./style";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderIcon name="chevron-back" />
      <Text size="extra_extra_large" font="light">
        Próximos{" "}
        <Text size="extra_extra_large" font="bold">
          3 dias
        </Text>
      </Text>
    </HeaderWrapper>
  );
};

export default memo(Header);
