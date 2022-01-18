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
          <h1>Nuestro trabajo</h1>
          <p>Aquí nuestros más recientes proyectos</p>
          <div className="dividerw"></div>
        </Text>
      </Container>
    </Wrapper>
  );
};

export default Separator;
