import React from "react";
import Courses from "./Courses";
import AboutCourses from "./AboutCourses";
import InProgress from "./InProgress";
import Contact from "./Contact";
import About from "./About";

const ArabicHome = ({ content }) => {
  return (
    <main className="flex flex-col space-y-8 justify-start overflow-hidden text-right">
      <AboutCourses content={content} id="aboutcourses"/>
      <Courses content={content} id="courses"/>
      <InProgress content={content} id="inprogress"  /> 
      <About content={content} id="about"  /> 
      <Contact content={content} id="contact"  /> 

    </main>
  );
};

export default ArabicHome;
