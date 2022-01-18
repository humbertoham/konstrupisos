import React, { useEffect } from "react";
import {
  Content,
  Wrapper,
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
  Page,
  Message,
} from "./Doing.styles";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faDraftingCompass,
  faHardHat,
  faPencilRuler,
  faTools,
  faTruckPickup,
  faBuilding,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
const Doing = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="doing">
      <Content>
        <h1>¿Qué es lo que hacemos?</h1>
        <div className="divider"></div>
        <p>
          Nos especializamos dar soluciones a problemas respecto a pisos y
          pavimentos de concreto
        </p>
      </Content>
      <div className="container">
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faWrench} size="3x" />
            <CardHeading>Pavimentos</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Ofrecemos una variedad de pavimentos dependiendo de sus
                necesidades, nostros podemos analizar la situación y darle el
                que más se ajuste a su necesidad.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon
              className="Icon"
              icon={faDraftingCompass}
              size="3x"
            />
            <CardHeading>
              Concreto pulido o pisos industriales y comerciales
            </CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Los pisos de cemento pulido consisten en un tipo de terminación
                que se le aplica al hormigón con el propósito de que quede liso,
                terso y con abundante brillo. El proceso permite un uso
                doméstico de sencillo mantenimiento y amigable con el medio
                ambiente.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faTools} size="3x" />
            <CardHeading>Concreto estampado</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Los pisos de concreto estampado son logrados con un tratamiento
                que le confiere gran resistencia a la superficie y con una
                terminación final con un sellador que protege los colores y
                sella los poros del material. El piso sigue al diseño y no es el
                diseño el que debe ajustarse a un tipo de piso.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>

        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faPencilRuler} size="3x" />
            <CardHeading>Concreto oxidado</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                El concreto oxidado es una técnica que proporciona un acabado
                especial con la aplicación de químicos líquidos, que reaccionan
                con el concreto, cambiando su color, sin modificar sus
                propiedades de dureza, desempeño o porosidad.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faHardHat} size="3x" />
            <CardHeading>Constructores experimentados</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Amplia experiencia en construcción y gestión de proyectos dentro
                de la empresa. También fantásticas relaciones de trabajo con
                excelentes operaciones de subcontratación.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faBuilding} size="3x" />
            <CardHeading>Construcción comercial</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Los servicios de construcción para el sector comercial están
                dentro de nuestro alcance. Somos capaces de entregar proyectos
                de tamaño pequeño a mediano que pueden incluir remodelaciones de
                oficinas o restaurantes, ampliaciones de locales comerciales,
                construcción completa de pequeñas unidades industriales, cambio
                de uso en locales comerciales y paisajismo en áreas externas.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
      </div>
      <Message href="#contact"> Contáctanos </Message>
    </Wrapper>
  );
};

export default Doing;
