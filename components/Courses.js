import React from "react";
import content from "../content.json";
import { useRouter } from "next/router";
import Books from "./Books";
import styles from "../styles/Courses.module.css"

const Courses = () => {
  const { locale } = useRouter();

  return (
    <div  id="courses"  className="min-h-screen h-full flex flex-col justify-between md:mx-16">
       <h3 className={`self-center mt-6 uppercase text-black text-2xl ${locale === 'en-US' ? ' tracking-[20px]':''}`}>
       {locale === "en-US" ?  "Courses" : "الدورات"}
      </h3>
      <ul className={styles.ul}>
        {locale === "en-US"
          ? content.en.courseInfo.map((info, i) => 
          <li className={styles.li} key={i} >
            <h2 className={styles.h2}></h2>
            <p className={styles.p}>- {info}</p>
            
            </li>
            )
          : content.ar.courseInfo.map((info, i) => 
          <li className={styles.li} key={i}>
            <h2 className={styles.h2}></h2>
           <p  className={styles.p}>{info} -</p>
            </li>)}
      </ul>
          <Books />
    </div>
  );
};

export default Courses;
