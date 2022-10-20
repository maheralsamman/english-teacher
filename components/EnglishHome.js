import React from "react";
import Courses from "./Courses";

const EnglishHome = ({ content }) => {
  return (
    <main className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <Courses />
      <h1>{content.mainTitle}</h1>
    </main>
  );
};

export default EnglishHome;
