import React from "react";
//import content from "../content.json";
import { useRouter } from "next/router";
import styles from "../styles/StickyNotes.module.css";
import { motion } from "framer-motion";

const AboutCourses = ({ content }) => {
  const { locale } = useRouter();

  return (
    <div
      id="aboutcourses"
      className="min-h-screen h-full flex flex-col justify-around md:mx-16"
    >
      <h3
        className={`text-center self-center mt-6 uppercase text-black text-2xl ${
          locale === "en" ? " tracking-[20px]" : ""
        }`}
      >
        {locale === "en" ? "About Courses" : "عن الدورات"}
      </h3>
        <ul className={styles.ul}>
          {locale === "en"
            ? content.en.courseInfo.map((info, i) => (
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: `.${i}` }}
                  viewport={{ once: true }}
                  className={styles.li}
                  key={i}
                >
                  <p className={styles.p}>- {info}</p>
                </motion.li>
              ))
            : content.ar.courseInfo.map((info, i) => (
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: `.${i}` }}
                  viewport={{ once: true }}
                  className={styles.li}
                  key={i}
                >
                  <p className={styles.p}>{info} -</p>
                </motion.li>
              ))}
        </ul>
    </div>
  );
};

export default AboutCourses;
