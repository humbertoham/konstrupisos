import React, { useEffect } from "react";
import {
  Content,
  Wrapper,
  Text,
  Box,
  Map,
  MapContainer,
  MapC,
} from "./About.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Aos from "aos";
import "aos/dist/aos.css";
import {
  faHandshake,
  faLock,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="about">
      <Content data-aos="fade-right">
        <Text>
          <h1>Lorem</h1>
          <p>Lorem</p>
        </Text>
      </Content>

      <Content data-aos="fade-right">
        <Box className="dp"> </Box>
        <Text>
          <h1>Lorem</h1>
          <p>Lorem</p>
        </Text>
        <Box className="db"> </Box>
      </Content>
      <Content data-aos="fade-right">
        <Box className="dp"> </Box>
        <Text className="right">
          <h1>Lorem</h1>
        </Text>
        <Box className="db"> </Box>
      </Content>
      <Content data-aos="fade-right">
        <Box className="dp"> </Box>
        <Text className="right">
          <h1>Lorem</h1>
          <p>Lorem</p>
        </Text>
        <Box className="db"> </Box>
      </Content>
      <Content data-aos="fade-right">
        <Text>
          <h1>Lorem</h1>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default About;
