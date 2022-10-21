import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import a1 from "../assets/a1.webp";
import a2 from "../assets/a2.webp";
import b1 from "../assets/b1.webp";
import b2 from "../assets/b2.webp";
import c1 from "../assets/c1.webp";
import c2 from "../assets/c2.webp";
import conversation from "../assets/conversation.webp";
import ielts from "../assets/ielts.webp";

const Books = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      showThumbs={false}
      className="w-3/4 mb-8 self-center"
    >
      <div>
        <Image src={a1} />
        <p className="legend">BEGGINER A1 (A , B , C)</p>
      </div>

      <div>
        <Image src={b1} />
        <p className="legend">ELEMENTARY A2 (A, B, C)</p>
      </div>
      <div>
        <Image src={a2} />
        <p className="legend">PRE-INTERMEDIATE B1 (A, B, C)</p>
      </div>

      <div>
        <Image src={b2} />
        <p className="legend">INTERMEDIATE B2 (A, B, C)</p>
      </div>
      <div>
        <Image src={c1} />
        <p className="legend">UPPER-INTERMEDIATE C1 (A, B, C)</p>
      </div>
      <div>
        <Image src={c2} />
        <p className="legend">ADVANCED C2 (A, B, C)</p>
      </div>
      <div>
        <Image src={conversation} />
        <p className="legend">ENGLISH CONVERSATION</p>
      </div>
      <div>
        <Image src={ielts} />
        <p className="legend">IELTS PREPARATION COURSE</p>
      </div>
    </Carousel>
  );
};

export default Books;
