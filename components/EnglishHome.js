import React from "react";
import Courses from "./Courses";
import InProgress from "./InProgress";
import Contact from "./Contact";
import About from "./About";

const EnglishHome = ({ content }) => {
  return (
    <main className="flex flex-col space-y-32 justify-start overflow-hidden">
      <Courses content={content}  id="courses"  />
      <InProgress content={content} id="inprogress"  /> 
      <About content={content} id="about"  /> 
      <Contact content={content} id="contact"  /> 
      {/*
      // ** courses     // about courses ( courseInfo ) section with caourosel courses we teach 
      // IN PROGRESS // COURSES IN PROGRESS right now with ( points )
      // contact
      */}
    </main>
  );
};

export default EnglishHome;
