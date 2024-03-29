import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
//import content from "../content.json";
import ArabicHome from "../components/ArabicHome";
import EnglishHome from "../components/EnglishHome";
import Background from "../components/Background";
import Header from "../components/Header";
import Language from "../components/Language";
import Hero from "../components/Hero";
import NewStudent from "../components/NewStudent";
import whatsapp from "../assets/whatsapp-logo.png";
import Image from "next/image";

export default function Home() {
  const { locale, locales, asPath } = useRouter();

  const [content, setContent] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await fetch("https://api.npoint.io/a0103f7c865cba342b3b", {
      cache: "no-store",
    });
    const result = await data.json();
    setContent(result);
  };

  return (
    /* bg-[rgb(13,13,13)] */
    /*darker green #426d18 */
    /*the original green #68b132 */
    <div className=" text-white h-screen relative overflow-scroll z-0 bg-gradient-to-r from-[#0e0e0e] via-[#487c21] to-[rgba(14,14,14,1)]">
      <Head>
        <title>Yasser Alsamman</title>
      </Head>
      {/* <NewStudent/> */}
      <Language />
      <Background />
      <Hero />
      <section className="snap-center"></section>
      {/* <Header className="" /> */}

      <div className="text-yellow-400">
        {Object.keys(content).length >= 1 ? (
          <div>
            {locale === "en" ? (
              <EnglishHome content={content} />
            ) : (
              <ArabicHome content={content} />
            )}
          </div>
        ) : (
          <h1>LOADING...</h1>
        )}
      </div>
      <div className="whatsapp w-14 h-14 md:w-16 md:h-16 right-2 fixed bottom-2 md:right-10 md:bottom-10">
        <Link href="https://api.whatsapp.com/send/?phone=905310137740&text&app_absent=0">
          <div className="cursor-pointer" >
          <Image alt="WhatsApp" src={whatsapp} />
          </div>
        </Link>
      </div>
    </div>
  );
}
