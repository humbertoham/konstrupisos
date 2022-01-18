import React from "react";
import { Content, Wrapper, Text, Box, Map, MapC } from "./Contact.styles";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <Wrapper>
      <Content id="one">
        <Text id="info">
          <h1>Información personal</h1>
          <p>• Nombre: Ing. Antonio Morales Murguía</p>
          <p>• Edo civil: Casado</p>
          <p>• Nacionalidad: Mexicano </p>
          <p>• Lugar de Nac. Veracruz, Ver.</p>
          <h1>Información laboral</h1>
          <p>• RFC: MOMA730702 9H7 </p>
          <p>• CURP: MOMA 730702HVZRRN08 </p>
          <p>• Registro patronal IMSS: F3023104109 </p>
          <p>
            • Domicilio fiscal: Av de Las Palmeras 565, fracc. Jardines de
            Virginia, Boca del Río, Ver. c.p. 94294
          </p>
        </Text>
      </Content>
      <Content id="two">
        <Text id="contact" data-aos="fade-right">
          <h1>Contáctanos</h1>
          <p>
            {" "}
            <FontAwesomeIcon className="Google" size="2x" icon={faEnvelope} />
            Email: amomur@hotmail.com
          </p>
          <p>
            <FontAwesomeIcon className="whats" size="2x" icon={faWhatsapp} /> +
            52 229 901 4933
          </p>
          <p>
            <FontAwesomeIcon className="pin" size="2x" icon={faMapMarkerAlt} />{" "}
            Ubicación: Av de Las Palmeras 565, fracc. Jardines de Virginia, Boca
            del Río, Ver. c.p. 94294
          </p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default Contact;
