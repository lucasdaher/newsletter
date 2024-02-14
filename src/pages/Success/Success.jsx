import React from "react";

import iconSuccess from "../../assets/icon-success.svg";

const Success = () => {
  return (
    <div className="bg-dark-navy flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col justify-start items-start w-success-container h-auto bg-white rounded-container p-successContainer">
        <img src={iconSuccess} alt="Success Icon" className="m-iconSuccess" />
        <h1 className="text-dark-navy text-h1 font-bold leading-title m-successTitle">
          Thanks for
          <br />
          subscribing!
        </h1>
        <p className="text-dark-navy text-paragraph font-regular m-iconSuccess">
          A confirmation email has been sent to{" "}
          <span className="font-bold">ash@loremcompany.com</span>. Please open
          it and click the button inside to confirm your subscription.
        </p>
        <button
          type="button"
          className="w-button h-button bg-dark-navy text-white font-bold text-button border-none rounded-input cursor-pointer transition-all hover:bg-gradient-to-r from-gradient-start to-gradient-end hover:shadow-button hover:shadow-boxShadow"
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default Success;
