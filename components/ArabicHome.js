import React from "react";
import Courses from "./Courses";
import InProgress from "./InProgress";
import Contact from "./Contact";
import About from "./About";

const ArabicHome = ({ content }) => {
  return (
    <main className="flex flex-col space-y-8 justify-start overflow-hidden text-right">
      <Courses />
      <InProgress  id="inprogress"  /> 
      <Contact  id="contact"  /> 
      <About  id="about"  /> 

    </main>
  );
};

export default ArabicHome;
