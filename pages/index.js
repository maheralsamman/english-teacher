import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import content from "../content.json";
import ArabicHome from "../components/ArabicHome";
import EnglishHome from "../components/EnglishHome";
import Background from "../components/Background";
import Header from "../components/Header";
import Language from "../components/Language";
import Hero from "../components/Hero";

export default function Home() {
  const { locale, locales, asPath } = useRouter();
  return (
      /* bg-[rgb(13,13,13)] */
      /*darker green #426d18 */
    <div className=" text-white h-screen overflow-scroll z-0 bg-gradient-to-r from-[#0e0e0e] via-[#68b132] to-[rgba(14,14,14,1)]">
      <Head>
        <title>Yasser Alsamman</title>
      </Head>
      <Language />
      <Background />
      <Hero />
      <section id="about" className="snap-center">
      </section>
      {/* <Header className="" /> */}

      <div className="text-yellow-400">
        <div>
          {locale === "en-US" ? (
            <EnglishHome content={content.en} />
          ) : (
            <ArabicHome content={content.ar} />
          )}
        </div>
      </div>
    </div>
  );
}
