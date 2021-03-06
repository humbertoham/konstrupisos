import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faInfo,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <FontAwesomeIcon className="hom" icon={faHome} size="1x" /> Inicio
      </a>
      <a href="#about" tabIndex={tabIndex}>
        <FontAwesomeIcon className="user" icon={faUser} size="1x" />
        Acerca de
      </a>
      <a href="#info" tabIndex={tabIndex}>
        <FontAwesomeIcon className="user" icon={faInfo} size="1x" />
        Información laboral
      </a>
      <a href="#contact" tabIndex={tabIndex}>
        <FontAwesomeIcon className="user" icon={faEnvelope} size="1x" />
        Contáctanos
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
