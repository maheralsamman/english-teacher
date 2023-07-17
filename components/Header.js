import React from "react";
import Language from "./Language";
//import { SocialIcon } from "react-social-icons";
/* import { motion } from "framer-motion";
 */
// color: #ffff63;

function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <div className="flex flex-row items-center">
        <p>Icon</p>
        <p>Icon</p>
        <p>Icon</p>
      </div>
      <div className="flex flex-row items-center text-grey-300 cursor-pointer">
        {/* <div className="uppercase hidden md:inline-flex text-sm text-grey-400"> */}
        <Language />
   {/*      </div> */}
      </div>
    </header>
  );
}

export default Header;
