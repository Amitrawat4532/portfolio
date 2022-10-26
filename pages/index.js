import React from "react";
import Aboutpage from "../Component/Aboutpage";
import Education from "../Component/Education";
import Homepage from "../Component/Homepage";
import Navbar from "../Component/Navbar";
import Skills from "../Component/Skills";
import Contact from "../Component/Contactpage";
import Footerpage from "../Component/Footerpage";
const index = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <Aboutpage />
      <Education />
      <Skills />
      <Contact />
      <Footerpage />
    </>
  );
};

export default index;
