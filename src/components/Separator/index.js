import React, { useEffect } from "react";
import { Container, Wrapper, Text, Message, LogoN } from "./Separator.styles";
import image from "../../images/banner.jpg";

import Aos from "aos";
import "aos/dist/aos.css";
const Separator = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Container imgUrl={image}>
        <Text>
          <h1>Estos son algunos ejemplos de nuestros trabajos</h1>
        </Text>
      </Container>
    </Wrapper>
  );
};

export default Separator;
