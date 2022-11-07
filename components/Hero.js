import React from "react";
import Link from "next/link";
import styles from "../styles/Background.module.css";
import { useRouter } from "next/router";
import content from "../content.json";
import Image from "next/image";
import lang from "../assets/lang.png";

const Hero = () => {
  const { locale, locales, asPath } = useRouter();

  return (
    <div className="h-screen flex flex-col space-y-1 items-center justify-center text-center overflow-hidden">
      <Image alt="English languarium" className="drop-shadow-[15px_15px_15px_rgba(0,0,0,1)]" src={lang} /> {/* beatiful green shadow rgb(78 163 0) */}
      <div className={styles.context}>
        <h1 className="body-font font-poppins custom [text-shadow:_5px_5px_20px_rgb(0_0_0_/_40%)]">
          {locale === "en-US" ? content.en.mainTitle : content.ar.mainTitle}
        </h1>
      </div>
      <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:space-x-10 pt-2">
        <Link href="#courses">
          <button className="heroButton">{locale === "en-US" ? "Courses" : "الدورات"}</button>
        </Link>
        <Link href="#inprogress">
          <button className="heroButton">{locale === "en-US" ? "IN PROGRESS" : "الدورات الجارية"}</button>
        </Link>
        <Link href="#about">
          <button className="heroButton">{locale === "en-US" ? "About" : "من نحن"}</button>
        </Link>
        <Link href="#contact">
          <button className="heroButton">{locale === "en-US" ? "Contact" : "اتصل بنا"}</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
