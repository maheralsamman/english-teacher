import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import sa from "../assets/sa.png";
import uk from "../assets/uk.png";
import Image from 'next/image'

const Language = () => {

  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
        <Link href="/en" locale="en" >
            <a>
            <Image alt="English" className="cursor-pointer"  src={uk} width="60px" height="60px" />
            </a>
            </Link>
        <Link href="/ar" locale="ar">
            <a>
            <Image alt="Arabic" className="cursor-pointer"  src={sa} width="60px" height="60px" />
            </a>
            </Link>

        {/*         {locales.map((l, i) => {
          return (
            <span key={i} className={l === locale ? styles.selected : ""}>
              <Link href={asPath} locale={l}>
                {l}

              </Link>
            </span>
          );
        })} */}
      </div>
    </main>
  );
};

export default Language;
//filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%);
//filter: invert(62%) sepia(74%) saturate(383%) hue-rotate(48deg) brightness(93%) contrast(91%);
