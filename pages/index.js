import React from "react";
import Aboutpage from "../Component/Aboutpage";
import Education from "../Component/Education";
import Homepage from "../Component/Homepage";
import Navbar from "../Component/Navbar";
import Skills from "../Component/Skills";
import Projects from "../Component/Projects";
import Contactpage from "../Component/Contactpage";
import Footerpage from "../Component/Footerpage";
const index = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <Aboutpage />
      <Education />
      <Skills />
      <Projects />
      <Contactpage />
      <Footerpage />
    </>
  );
};

export default index;
