import React from "react";

import { useEffect } from "react";
import Button from "../../components/Button";
import Verified from "../../components/Verified";

import Title from "../../components/Title";

const Success = () => {
  useEffect(() => {
    document.body.className =
      "bg-white flex flex-col justify-start items-center w-auto px-[1.5rem] py-[9.31rem] sm:bg-darkNavy sm:justify-center";
  }, []);

  return (
    <div className="flex flex-col justify-center items-start w-full h-auto bg-white rounded-[2.25rem] sm:w-[31.5rem] sm:h-auto sm:p-[4rem]">
      <Verified />
      <Title text="Thanks for subscribing!" styles="mb-[1.5rem]" />

      <p className="w-[20.4375rem] text-darkNavy text-[1rem] font-regular mb-[16.44rem] sm:mb-[2.5rem] sm:w-[23.5rem]">
        A confirmation email has been sent to{" "}
        <span className="font-bold">ash@loremcompany.com</span>. Please open it
        and click the button inside to confirm your subscription.
      </p>

      <Button text="Dismiss message" />
    </div>
  );
};

export default Success;
