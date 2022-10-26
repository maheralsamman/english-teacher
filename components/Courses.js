import React from "react";
import content from "../content.json";
import { useRouter } from "next/router";
import Books from "./Books";

const Courses = () => {
  const { locale } = useRouter();

  return (
    <div  id="courses"  className="">
       <h3 className={``}>
       {locale === "en-US" ?  "" : "لدورات"}
      </h3>
      <div className="">
        {locale === "en-US"
          ? content.en.courseInfo.map((info) => <p>- {info}</p>)
          : content.ar.courseInfo.map((info) => <p>{info} -</p>)}
      </div>
          <Books />
    </div>
  );
};

export default Courses;
