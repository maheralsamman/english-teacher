import React from "react";
import content from "../content.json";
import { useRouter } from "next/router";
import Books from "./Books";


const Courses = () => {
  const { locale } = useRouter();

  return (
    <div  id="courses"  className="h-screen flex flex-col justify-between md:mx-16">
       <h3 className={`self-center mt-6 uppercase text-black text-2xl ${locale === 'en-US' ? ' tracking-[20px]':''}`}>
       {locale === "en-US" ?  "Courses" : "الدورات"}
      </h3>
      <div className="grid grid-cols-2 justify-center grid-rows-4 p-2 gap-2 text-white text-sm md:text-xl md:m-8 ">
        {locale === "en-US"
          ? content.en.courseInfo.map((info, i) => <p key={i} className="text:sm md:text-base p-2 md:w-12/12 md:py-4 md:px-4 border-2 rounded border-[#7849ef81] odd:last:col-span-2">- {info}</p>)
          : content.ar.courseInfo.map((info, i) => <p key={i} className="text:sm md:text-base p-2 md:w-12/12 md:py-4 md:px-4 border-2 rounded border-[#7849ef81] odd:last:col-span-2">{info} -</p>)}
      </div>
          <Books />
    </div>
  );
};

export default Courses;
