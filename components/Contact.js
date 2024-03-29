import React from "react";
import { useRouter } from "next/router";
//import content from "../content.json";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

 const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.4,
      },
    },
  }; 
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  
  const pageStyle = {
    width: "100 %",
    height: "100vh",
    backgroundColor: "#2c2d2f",
  };

const Contact = ({ content }) => {
    const { locale } = useRouter();
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    viewport={{once:true}}
      id="contact"
      className="h-screen flex flex-col"
    >
       
      <h3 className={`text-center self-center mt-6 uppercase text-black text-2xl ${locale === 'en' ? ' tracking-[20px]':''}`}>
      {locale === "en" ?  "Contact" : "إتصل بنا"}
      </h3>
      <motion.div
          variants={container} 
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          className="p-8 text-white text-sm md:text-2xl m-2 mt-24 md:mt-28">
        {locale === `en` ?
                  <motion.div className="" variants={item}>
                  <div className="">
                    <div className="subheading">
                      <h3 className="mb-12 text-xl">Let&apos;s Talk</h3>
                    </div>
      
                    <ContactForm fields={content.en.contactForm} />
                  </div>
                </motion.div>
                :
                        <motion.div className="" variants={item}>
                        <div className="">
                          <div className="subheading">
                            <h3 className="mb-4">{locale === "en" ?  "Let&apos;s Talk" : "راسلنا"}</h3>
                          </div>
            
                          <ContactForm fields={content.ar.contactForm} />
                        </div>
                      </motion.div> }
      </motion.div>
    </motion.div>
  );
};

export default Contact;
