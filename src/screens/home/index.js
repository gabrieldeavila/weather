import React from "react";
import { Container, Text } from "../../base/style";
import Resume from "../../components/resume";
import Timeline from "../../components/timeline";

const Home = () => {
  return (
    <Container>
      <Resume />
      <Timeline />
    </Container>
  );
};

export default Home;
