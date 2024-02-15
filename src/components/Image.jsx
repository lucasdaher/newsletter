import React from "react";

import backgroundDesktop from "../assets/illustration-sign-up-desktop.svg";
import backgroundMobile from "../assets/illustration-sign-up-mobile.svg";

const Image = () => {
  return (
    <div className="flex flex-col">
      <img
        src={backgroundMobile}
        alt="Background Image"
        className="flex justify-center items-center max-w-[480px] w-screen sm:flex md:flex lg:hidden md:w-screen"
      />
      <img
        src={backgroundDesktop}
        alt="Background Image"
        className="hidden sm:hidden md:hidden lg:flex w-screen h-auto lg:h-[37.06rem]"
      />
    </div>
  );
};

export default Image;
