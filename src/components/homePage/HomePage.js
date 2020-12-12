import React from "react";
import NavPart from "../NavPart";
import "../../styles/_homePage.sass";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

const HomePage = () => {
  return (
    <div>
      <NavPart />
      <Home />
      <About />
      <Projects />
    </div>
  );
};

export default HomePage;
