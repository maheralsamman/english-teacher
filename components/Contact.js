import React from "react";
import { useRouter } from "next/router";
import content from "../content.json";

const Contact = () => {
    const { locale } = useRouter();
  return (
    <div
      id="contact"
      className="h-screen flex flex-col justify-between md:mx-16"
    >
       
      <h3 className={`self-center mt-6 uppercase text-black text-2xl ${locale === 'en' ? ' tracking-[20px]':''}`}>
      {locale === "en" ?  "Contact" : "إتصل بنا"}
      </h3>
      <div className="grid grid-cols-2 grid-rows-4 p-8 gap-2 text-white text-sm md:text-2xl md:m-12">
        {locale === `en`
          ? content.en.contactForm.map((info,i) => <p key={i}>- {info}</p>)
          : content.ar.contactForm.map((info,i) => <p key={i}>{info} -</p>)}
      </div>
    </div>
  );
};

export default Contact;
