import React from "react";
import { useRouter } from "next/router";
import Books from "./Books";
import styles from "../styles/StickyNotes.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import a1 from "../assets/a1.webp";
import a2 from "../assets/a2.webp";
import b1 from "../assets/b1.webp";
import b2 from "../assets/b2.webp";
import c1 from "../assets/c1.webp";
import c2 from "../assets/c2.webp";
import conversation from "../assets/conversation.webp";
import ielts from "../assets/ielts.webp";

const Courses = ({ content }) => {
  const { locale } = useRouter();
  const coursesImages = [a1, a2, b1, b2, c1, c2, ielts, conversation];
  return (
    <div
      id="courses"
      className="min-h-screen h-full flex flex-col justify-between md:mx-16"
    >
      <h3
        className={`text-center self-center mt-6 uppercase text-black text-2xl ${
          locale === "en" ? " tracking-[20px]" : ""
        }`}
      >
        {locale === "en" ? "Courses" : "الدورات"}
      </h3>
      <ul
        className={
          "flex justify-around content-evenly p-4 flex-wrap items-baseline gap-8"
        }
      >
        {locale === "en"
          ? coursesImages.map((img, i) => (
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: `.${i}` }}
                viewport={{ once: true }}
                className="text-center w-48 m-2"
                key={i}
              >
                <Image height={160} width={123} alt="" src={img} />
                <div>
                  {content.en.courses.courseName.length >= 1 && (
                    <p className="text-amber-200 font-bold">
                      {content.en.courses.courseName[i]}
                    </p>
                  )}
                </div>
                {content.en.courses.courseDescription.length >= 1 &&
                  content.en.courses.courseDescription[i].map((course, i) => (
                    <p className="text-white" key={i}>
                      {course}
                    </p>
                  ))}
              </motion.li>
            ))
          : coursesImages.map((img, i) => (
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: `.${i}` }}
                viewport={{ once: true }}
                className="text-center w-48 m-2"
                key={i}
              >
                <Image height={160} width={123} alt="" src={img} />
                <div>
                  {content.ar.courses.courseName.length >= 1 && (
                    <p className="text-amber-200 font-bold">
                      {content.en.courses.courseName[i]}
                    </p>
                  )}
                </div>
                {content.ar.courses.courseDescription.length >= 1 &&
                  content.ar.courses.courseDescription[i].map((course, i) => (
                    <p className="text-white" key={i}>
                      {course}
                    </p>
                  ))}
              </motion.li>
            ))}
      </ul>
    </div>
  );
};

export default Courses;
