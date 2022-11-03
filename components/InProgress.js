import React from "react";
import { useRouter } from "next/router";
import content from "../content.json";

const InProgress = () => {
  const { locale } = useRouter();
  return (
    <div
      id="inprogress"
      className="h-screen flex flex-col justify-between md:my-40 md:mx-16"
    >
      <h3
        className={`self-center mt-6 uppercase text-black text-2xl ${
          locale === "en-US" ? " tracking-[20px]" : ""
        }`}
      >
        {locale === "en-US" ? "In Progress" : "يجري حاليا"}
      </h3>
      <div className="grid md:grid-cols-2 justify-items-center md:grid-rows-2 gap-2 p-8 md:gap-8 text-white text-sm md:text-base ">
        {locale === "en-US"
          ? content.en.points.map((point) => <p className="p-2 lg:w-9/12 md:py-8 md:px-4 border-2 rounded border-[#7849ef81]">- {point}</p>)
          : content.ar.points.map((point) => <p>{point} -</p>)}
      </div>
      <div className="flex justify-center gap-2 flex-wrap self-center space-x-4">
        {locale === "en-US"
          ? Object.entries(content.en.inprogress).map(([key, value]) => (
              <div className="w-80 h-50 p-2 justify-start border-2 rounded border-[#7849ef]">
                <p className="inline text-[#31ff00] text:sm md:text-base p-2">{key}:</p>
                <p className="inline text-white text-xs p-2">{value}</p>
                {/* <div className="inline text-[#31ff00] text:sm md:text-base p-2">{key}:</div>
                <div className="inline text-white text-sm p-2">{value}</div> */}
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
