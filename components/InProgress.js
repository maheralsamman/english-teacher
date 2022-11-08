import React from "react";
import { useRouter } from "next/router";
import content from "../content.json";

const InProgress = () => {
  const { locale } = useRouter();
  return (
    <div
      id="inprogress"
      className="min-h-screen h-full flex flex-col mb-40 md:my-40 md:mx-16"
    >
      <h3
        className={`self-center my-20 uppercase text-black text-2xl ${
          locale === "en" ? " tracking-[20px]" : ""
        }`}
      >
        {locale === "en" ? "In Progress" : "يجري حاليا"}
      </h3>
{/*       <div className="grid sm:grid-cols-2 justify-items-center md:grid-rows-2 gap-4 p-8 text-white text-sm md:text-base ">
        {locale === "en"
          ? content.en.points.map((point, i) => <p key={i} className="text-sm p-2 w-full md:py-8 md:px-4 border-2 rounded border-[#7849ef81]">- {point}</p>)
          : content.ar.points.map((point, i) => <p key={i} className="text-sm p-2 w-full md:py-8 md:px-4 border-2 rounded border-[#7849ef81]">{point} -</p>)}
      </div> */}
      <div className="h-full flex justify-center gap-4 mt-6 w-full flex-col sm:flex-row sm:flex-wrap content-center items-center  sm:items-unset">
        {locale === "en"
          ? Object.entries(content.en.inprogress).map(([key, value], i) => (
              <div key={i} className="w-52 h-64 p-4 flex-col md:flex-row border-2 rounded border-[#7849ef]">
                <p className="inline text-[#31ff00] p-0 text-lg">{key}:</p>
                <p className="inline text-white text-lg p-1">{value}</p>
              </div>
            ))
          : Object.entries(content.ar.inprogress).map(([key, value], i) => (
            <div key={i} className="w-52 h-64 p-4 flex-col md:flex-row border-2 rounded border-[#7849ef]">
                <p className="inline text-[#31ff00] p-0 text-lg">{key}: </p>
                <p className="inline text-white text-lg p-1">{value}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default InProgress;
