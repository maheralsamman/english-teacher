import React from "react";
//import content from "../content.json";
import { useRouter } from "next/router";
import Books from "./Books";
import styles from "../styles/StickyNotes.module.css";
import { motion } from "framer-motion";

const Courses = ({ content }) => {
  const { locale } = useRouter();

  return (
    <div
      id="courses"
      className="min-h-screen h-full flex flex-col justify-between md:mx-16"
    >
      <h3
        className={`self-center mt-6 uppercase text-black text-2xl ${
          locale === "en" ? " tracking-[20px]" : ""
        }`}
      >
        {locale === "en" ? "Courses" : "الدورات"}
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
      <Books />
    </div>
  );
};

export default Courses;
