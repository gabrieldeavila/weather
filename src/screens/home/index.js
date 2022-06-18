import React, { useContext } from "react";
import { Container, Text } from "../../base/style";
import Resume from "../../components/resume";
import Timeline from "../../components/timeline";
import { GlobalContext } from "../../contexts/globalContext";
import _ from "lodash";
import { LoadingIndicator } from "../../base/components";

const Home = () => {
  const { state } = useContext(GlobalContext);
  console.log(state);
  return (
    <Container>
      {_.isEmpty(state.current) ? (
        <LoadingIndicator />
      ) : (
        <>
          <Resume />
          <Timeline />
        </>
      )}
    </Container>
  );
};

export default Home;
