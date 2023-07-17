import React from "react";
import styles from "../styles/Background.module.css";
import mkey from "../assets/mkey.png";
import Image from "next/image";

const Background = () => {
  return (
    <div className="">
      <div className={styles.area}>
        <div className={styles.circles}>
          <div className={styles.image}>
            <Image alt="music" src={mkey} width="60px" height="120px" />
          </div>
          <div className={styles.image2}>
            <Image alt="music" src={mkey} width="60px" height="120px" />
          </div>
          <div className={styles.image3}>
            <Image alt="music" src={mkey} width="60px" height="120px" />
          </div>
          <div className={styles.image4}>
            <Image alt="music" src={mkey} width="60px" height="120px" />
          </div>
          <div className={styles.image5}>
            <Image alt="music" src={mkey} width="60px" height="120px" />
          </div>
          <div className={styles.image6}>
            <Image alt="music" src={mkey} width="60px" height="120px" />
          </div>
          <div className={styles.image7}>
            <Image alt="music" src={mkey} width="60px" height="120px" />
          </div>
          <div className={styles.image8}>
            <Image alt="music" src={mkey} width="60px" height="120px" />
          </div>
          <div className={styles.image9}>
            <Image alt="music" src={mkey} width="60px" height="120px" />
          </div>
          <div className={styles.image10}>
            <Image alt="music" src={mkey} width="60px" height="120px" />
          </div>
          <div className={styles.image11}>
            <Image alt="music" src={mkey} width="60px" height="120px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
