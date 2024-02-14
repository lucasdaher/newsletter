import React from "react";

import backgroundDesktop from "../assets/illustration-sign-up-desktop.svg";
import backgroundMobile from "../assets/illustration-sign-up-mobile.svg";

const Image = () => {
  return (
    <div className="flex flex-col">
      <img
        src={backgroundMobile}
        alt="Background Image"
        className="flex w-[23.4375rem] sm:hidden"
      />
      <img
        src={backgroundDesktop}
        alt="Background Image"
        className="hidden sm:flex"
      />
    </div>
  );
};

export default Image;
