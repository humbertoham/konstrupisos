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

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Doing = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Content>
        <h1>¿Qué es lo que hacemos?</h1>
        <div className="divider"></div>
        <p>Nos especializamos dar soluciones a problemas respecto a pisos</p>
      </Content>
      <div className="container">
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Lorem</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium reprehenderit cumque fugiat ratione quia deleniti
                adipisci numquam, dolorem ipsa pariatur dolor fugit. Accusantium
                omnis in, perspiciatis beatae at odio excepturi.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Lorem</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium reprehenderit cumque fugiat ratione quia deleniti
                adipisci numquam, dolorem ipsa pariatur dolor fugit. Accusantium
                omnis in, perspiciatis beatae at odio excepturi.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Lorem</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium reprehenderit cumque fugiat ratione quia deleniti
                adipisci numquam, dolorem ipsa pariatur dolor fugit. Accusantium
                omnis in, perspiciatis beatae at odio excepturi.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Lorem</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium reprehenderit cumque fugiat ratione quia deleniti
                adipisci numquam, dolorem ipsa pariatur dolor fugit. Accusantium
                omnis in, perspiciatis beatae at odio excepturi.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Lorem</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium reprehenderit cumque fugiat ratione quia deleniti
                adipisci numquam, dolorem ipsa pariatur dolor fugit. Accusantium
                omnis in, perspiciatis beatae at odio excepturi.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Lorem</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium reprehenderit cumque fugiat ratione quia deleniti
                adipisci numquam, dolorem ipsa pariatur dolor fugit. Accusantium
                omnis in, perspiciatis beatae at odio excepturi.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
          3
        </CardWrapper>
      </div>
      <Message href="#contact"> Contáctanos </Message>
    </Wrapper>
  );
};

export default Doing;
