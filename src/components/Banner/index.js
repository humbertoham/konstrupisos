import React from "react";
import { useEffect } from "react";
import {
  Container,
  Wrapper,
  Text,
  Logo,
  LogoN,
  Message,
} from "./Banner.styles";
import image from "../../images/banner.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import logokons from "../../images/konstrupisoslogo.svg";
const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Container imgUrl={image}>
        <Text data-aos="fade-up">
          <Logo href="/">
            <LogoN src={logokons} />
          </Logo>
          <h1>Diseño y construcción de pisos</h1>
          <p>
            "La calidad nunca es un accidente. Siempre es el resultado de un
            esfuerzo inteligente”. – John Ruskin
          </p>
          <section id="section05" class="demo">
            <a href="#slogan">
              <span></span>
            </a>
          </section>
        </Text>
      </Container>
    </Wrapper>
  );
};

export default Banner;
