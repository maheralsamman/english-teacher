import React from "react";
import { useRouter } from "next/router";
import content from "../content.json";
import { GiTeacher, GiMusicalScore } from 'react-icons/gi';
import { FaChalkboardTeacher, FaSchool } from 'react-icons/fa';
import { SiFuturelearn } from 'react-icons/si';
import { motion } from "framer-motion";

const About = ({ content }) => {
    const { locale } = useRouter();
  return (
    <div id="about" className="min-h-screen h-full flex flex-col justify-between md:mx-16">
      <h3 className={`text-center self-center mt-6 uppercase text-black text-2xl ${locale === 'en' ? ' tracking-[20px]':''}`}>
      {locale === "en" ?  "About" : "من نحن"}
      </h3>
      <motion.div style={{display: "grid", "gridTemplateRows": "repeat(3, minmax(0, 1fr))", "gridTemplateColumns": "repeat(2, minmax(0, 1fr))"}} 
      className="grid grid-cols-2 grid-rows-3 p-8 gap-2 text-white text-sm md:text-2xl md:m-12">
        {locale === "en"
          ? content.en.about.map((info,i) => 
          <motion.div 
          key={i}
          initial={{  x: i % 2 === 0 ?  "-100%" : "100%" , opacity: 0 }}
          whileInView={{ x:0, opacity: 1 }}
          transition={{ duration: 1.5, delay:`.${i}` }}
          viewport={{once:true}}
          className={`flex flex-col items-center ${content.en.about.length === i + 1 ? "col-span-2 w-1/2 m-auto" : ""}`}>
          {i === 0 ? <GiTeacher className="icon" /> : i === 1 ? <FaChalkboardTeacher className="icon" /> : i === 2 ? <FaSchool className="icon" /> : i === 3 ? <SiFuturelearn className="icon" /> : i === 4 ? <GiMusicalScore className="icon"/> :""}
          <p className="text-[#ffff63]" key={i}>{info}</p>

          </motion.div>
          )
          : content.ar.about.map((info,i) => 
          <motion.div
          key={i}
          initial={{  x: i % 2 === 0 ?  "-100%" : "100%" , opacity: 0 }}
          whileInView={{x:0, opacity: 1 }}
          transition={{ duration: 1.5, delay:`.${i}` }}
          viewport={{once:true}}
          className={`flex flex-col items-center ${content.en.about.length === i + 1 ? "col-span-2 w-1/2 m-auto" : ""}`}
          >
              {i === 0 ? <GiTeacher className="icon" /> : i === 1 ? <FaChalkboardTeacher className="icon" /> : i === 2 ? <FaSchool className="icon" /> : i === 3 ? <SiFuturelearn className="icon" /> : i === 4 ? <GiMusicalScore className="icon"/> :""}
          <p className="text-[#ffff63]" key={i}>{info}</p>
          </motion.div>
          )}
      </motion.div>
    </div>
  );
};

export default About;
