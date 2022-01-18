import React, { useEffect } from "react";
import { Content, Wrapper, Text, Map, MapC } from "./Slogan.styles";

import MapP from "../../images/construction.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Slogan = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="slogan">
      <Content data-aos="fade-right">
        <Text>
          <h1>Diseño y construcción de pisos y pavimentos de concreto</h1>
        </Text>
        <MapC className="right" data-aos="fade-up">
          <Map src={MapP} />
        </MapC>
      </Content>
    </Wrapper>
  );
};

export default Slogan;
