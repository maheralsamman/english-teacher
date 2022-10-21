import React from "react";
import { useRouter } from "next/router";
import content from "../content.json";


const About = () => {
    const { locale } = useRouter();
  return (
    <div id="about" className="h-screen flex flex-col justify-between md:mx-16">
      <h3 className={`self-center mt-6 uppercase text-black text-2xl ${locale === 'en-US' ? ' tracking-[20px]':''}`}>
      {locale === "en-US" ?  "About" : "من نحن"}
      </h3>
      <div className="grid grid-cols-2 grid-rows-4 p-8 gap-2 text-white text-sm md:text-2xl md:m-12">
        {locale === "en-US"
          ? content.en.courseInfo.map((info) => <p>- {info}</p>)
          : content.ar.courseInfo.map((info) => <p>{info} -</p>)}
      </div>
    </div>
  );
};

export default About;
