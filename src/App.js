import React from "react";
import Home from "./components/Home";
import Foot from "./components/Foot";
import { GlobalStyle } from "./GlobalStyle";
import "swiper/css/bundle";

const App = () => (
  <>
    <Home />
    <Foot />
    <GlobalStyle />
  </>
);

export default App;
