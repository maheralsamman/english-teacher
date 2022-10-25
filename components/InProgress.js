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
      <div className="grid grid-cols-2 grid-rows-2 p-8 gap-8 text-white text-sm md:text-base ">
        {locale === "en-US"
          ? content.en.points.map((point) => <p>- {point}</p>)
          : content.ar.points.map((point) => <p>{point} -</p>)}
      </div>
      <div className="">
        {locale === "en-US"
          ? Object.entries(content.en.inprogress).map(([key, value]) => (
              <div className="flex flex-col w-40 h-50 p-2 justify-start border-2 rounded border-[#7849ef]">
                <div className="text-[#31ff00]">{key}</div>
                <div className="text-white">{value}</div>
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
