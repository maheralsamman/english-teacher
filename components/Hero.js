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
      <Image className="drop-shadow-[15px_15px_15px_rgba(0,0,0,1)]" src={lang} /> {/* beatiful green shadow rgb(78 163 0) */}
      <div className={styles.context}>
        <h1 className="animate-pulse">
          {locale === "en-US" ? content.en.mainTitle : content.ar.mainTitle}
        </h1>
      </div>
      <div className="flex space-x-20 pt-2">
        <Link href="#about">
          <button className="heroButton">{locale === "en-US" ? "Courses" : "الدورات"}</button>
        </Link>
        <Link href="#about">
          <button className="heroButton">{locale === "en-US" ? "About" : "من نحن"}</button>
        </Link>
        <Link href="#about">
          <button className="heroButton">{locale === "en-US" ? "Contact" : "اتصل بنا"}</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
