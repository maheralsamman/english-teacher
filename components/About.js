import React from "react";
import { useRouter } from "next/router";
import content from "../content.json";
import { GiTeacher, GiMusicalScore } from 'react-icons/gi';
import { FaChalkboardTeacher, FaSchool } from 'react-icons/fa';
import { SiFuturelearn } from 'react-icons/si';
import { motion } from "framer-motion";

const About = () => {
    const { locale } = useRouter();
  return (
    <div id="about" className="min-h-screen h-full flex flex-col justify-between md:mx-16">
      <h3 className={`self-center mt-6 uppercase text-black text-2xl ${locale === 'en' ? ' tracking-[20px]':''}`}>
      {locale === "en" ?  "About" : "من نحن"}
      </h3>
      <div className="grid grid-cols-2 grid-rows-3 p-8 gap-2 text-white text-sm md:text-2xl md:m-12">
        {locale === "en"
          ? content.en.about.map((info,i) => 
          <motion.div className="flex flex-col items-center">
          {i === 0 ? <GiTeacher className="icon" /> : i === 1 ? <FaChalkboardTeacher className="icon" /> : i === 2 ? <FaSchool className="icon" /> : i === 3 ? <SiFuturelearn className="icon" /> : i === 4 ? <GiMusicalScore className="icon"/> :""}
          <p className="text-[#ffff63]" key={i}>{info}</p>
          </motion.div>
          )
          : content.ar.about.map((info,i) => 
          <motion.div>
              {i === 0 ? <GiTeacher className="icon" /> : i === 1 ? <FaChalkboardTeacher className="icon" /> : i === 2 ? <FaSchool className="icon" /> : i === 3 ? <SiFuturelearn className="icon" /> : i === 4 ? <GiMusicalScore className="icon"/> :""}
          <p key={i}>{info}</p>
          </motion.div>
          )}
      </div>
    </div>
  );
};

export default About;
