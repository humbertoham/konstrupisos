import React, { useEffect } from "react";
import { Content, Wrapper, Text, Box, Map, MapC } from "./About.styles";

import MapP from "../../images/construction.svg";
import Mision from "../../images/mision.svg";
import Vision from "../../images/vision.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="about">
      <Content data-aos="fade-right">
        <Text>
          <h1>Konstrupisos</h1>
          <p>
            Las principales actividades de konstrupisos son: el diseño y
            construcción de pisos industriales y decorativos de concreto así
            como vialidades de concreto rayado, estampado y concreto ecológico,
            obras de urbanización, edificación y mantenimiento a infraestructura
            carretera.
          </p>
          <p>
            Además de asesoría a nuestros clientes del sector privado y a los
            gobiernos federal estatal y municipal.
          </p>
        </Text>
        <MapC className="right" data-aos="fade-up">
          <Map src={MapP} />
        </MapC>
      </Content>

      <Content data-aos="fade-right">
        <MapC className="dp" data-aos="fade-up">
          <Map src={Mision} />
        </MapC>
        <Text>
          <h1>Misión</h1>
          <p>
            Apoyo constante al constructor cuya finalidad es la realización de
            nuevos y mejores acabados en concreto con un ahorro considerable en
            la obra.
          </p>
        </Text>
        <MapC className="db" data-aos="fade-up">
          <Map src={Mision} />
        </MapC>
      </Content>
      <Content data-aos="fade-right">
        <Text>
          <h1>Visión</h1>
          <p>
            Ser la empresa con la mayor aceptación nacional en el ramo de la
            construcción para la realización de obras de concreto, concreto
            decorativo, concreto ecológico y sus alternativas.
          </p>
        </Text>
        <MapC className="right" data-aos="fade-up">
          <Map src={Vision} />
        </MapC>
      </Content>
    </Wrapper>
  );
};

export default About;
