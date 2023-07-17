import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import ArabicHome from "../components/ArabicHome";
import EnglishHome from "../components/EnglishHome";
import Background from "../components/Background";
import Header from "../components/Header";
import Language from "../components/Language";
import Hero from "../components/Hero";
import NewStudent from "../components/NewStudent";

export default function Home() {
  const { locale, locales, asPath } = useRouter();

  const [content, setContent] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await fetch("https://api.npoint.io/611e3707cdf57ebe6c46", { cache: 'no-store' });
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
      <Hero/>
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
    </div>
  );
}
