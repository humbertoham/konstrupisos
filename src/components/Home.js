import React, { useState, useRef } from "react";

import Banner from "./Banner";

import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "../Hooks";
import { theme } from "../Theme";
import Burger from "./Burger";
import Menu from "./Menu";
import About from "./About";
import FocusLock from "react-focus-lock";
import Slogan from "./Slogan";
import Doing from "./Doing";
import Separator from "./Separator";
const Home = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <>
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
        <Banner />
        <Slogan />
        <Doing />
        <Separator />
        <About />
      </>
    </ThemeProvider>
  );
};

export default Home;
