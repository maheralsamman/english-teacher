import React from "react";
import Link from "next/link";
import styles from "../styles/Background.module.css";
import { useRouter } from "next/router";
//import content from "../content.json";
import Image from "next/image";
import lang from "../assets/lang.png";

const Hero = () => {
  const { locale, locales, asPath } = useRouter();

  return (
    <div className="h-screen flex flex-col space-y-1 items-center justify-center text-center overflow-hidden">
      <Image alt="English languarium" className="drop-shadow-[15px_15px_15px_rgba(0,0,0,1)]" src={lang} /> {/* beatiful green shadow rgb(78 163 0) */}
      <div className={styles.context}>
        <h1 className={`body-font font-poppins custom md:font-bold [text-shadow:_5px_5px_20px_rgb(0_0_0_/_40%)]  ${locale === "en" ? "text-3xl sm:text-5xl mb-4" : "text-4xl sm:text-7xl h-24 mb-4"}`}>
          {locale === "en" ? "SPEAK ENGLISH & MAKE THE CHANGE" : "تحدث الانجليزية بشغف"}
        </h1>
      </div>
      <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row pt-2">
        <Link href="#aboutcourses">
          <button className={`${locale === "en" ? "" : "order-5"} heroButton`}>{locale === "en" ? "About Courses" : "عن الدورات"}</button>
        </Link>
        <Link href="#courses">
          <button className={`${locale === "en" ? "" : "order-4"} heroButton`} >{locale === "en" ? "Courses" : "الدورات"}</button>
        </Link>
        <Link href="#inprogress">
          <button className={`${locale === "en" ? "" : "order-3"} heroButton`} >{locale === "en" ? "IN PROGRESS" : "الدورات الجارية"}</button>
        </Link>
        <Link href="#about">
          <button className={`${locale === "en" ? "" : "order-2"} heroButton`} >{locale === "en" ? "About" : "من نحن"}</button>
        </Link>
        <Link href="#contact">
          <button className={`${locale === "en" ? "" : "order-1"} heroButton`} >{locale === "en" ? "Contact" : "اتصل بنا"}</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
