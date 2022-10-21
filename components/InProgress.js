import React from "react";
import { useRouter } from "next/router";
import content from "../content.json";

const InProgress = () => {
  const { locale } = useRouter();
  return (
    <div
      id="inprogress"
      className="h-screen flex flex-col justify-betwen md:mx-16"
    >
      <h3
        className={`self-center mt-6 uppercase text-black text-2xl ${
          locale === "en-US" ? " tracking-[20px]" : ""
        }`}
      >
        {locale === "en-US" ? "In Progress" : "يجري حاليا"}
      </h3>
      <div className="grid grid-cols-2 grid-rows-2 p-8 gap-8 text-white text-sm md:text-2xl ">
        {locale === "en-US"
          ? content.en.points.map((point) => <p>- {point}</p>)
          : content.ar.points.map((point) => <p>{point} -</p>)}
      </div>
      <div className="flex justify-between w-10/12 self-center space-x-4">
        {locale === "en-US"
          ? Object.entries(content.en.inprogress).map(([key, value]) => (
              <div className="flex flex-col justify-betwen border">
                <div>{key}</div>
                <div>{value}</div>
              </div>
            ))
          : Object.entries(content.ar.inprogress).map(([key, value]) => (
            <div>
              <div>{key}</div>
              <div>{value}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default InProgress;
