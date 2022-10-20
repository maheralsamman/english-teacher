import React from "react";

const EnglishHome = ({ content }) => {
  return (
    <main className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <h1>{content.mainTitle}</h1>
    </main>
  );
};

export default EnglishHome;
