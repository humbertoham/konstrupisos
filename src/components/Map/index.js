import React from "react";
import { Container, Wrapper } from "./Map.styles";

const Map = () => {
  return (
    <Wrapper>
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15075.726852032534!2d-96.11305024570815!3d19.15446619776462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c3411ef884cf8f%3A0xeed7b69ea155f81c!2sAv%20de%20las%20Palmeras%20565%2C%20Jardines%20del%20Virginia%2C%2094294%20Boca%20del%20R%C3%ADo%2C%20Ver.!5e0!3m2!1sen!2smx!4v1642528594242!5m2!1sen!2smx"
          width="100%"
          height="400"
        ></iframe>
      </Container>
    </Wrapper>
  );
};

export default Map;
