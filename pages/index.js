import React from "react";
import Aboutpage from "../Component/Aboutpage";
import Homepage from "../Component/Homepage";
import Navbar from "../Component/Navbar";
import Skills from "../Component/Skills";
const index = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <Aboutpage />
      <Skills />
    </>
  );
};

export default index;
