import React from "react";

const ArabicHome = ({ content }) => {
  return (
    <main className="text-right">
      <h1>{content.mainTitle}</h1>
      <p>{content.points[0]}</p>
      <p>{content.points[1]}</p>
      <p>{content.points[2]}</p>
      <p>{content.points[3]}</p>
    </main>
  );
};

export default ArabicHome;
