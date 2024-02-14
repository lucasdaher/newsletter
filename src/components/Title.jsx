import React from "react";

const Title = ({ text, styles }) => {
  return (
    <h1
      className={`text-darkNavy font-bold leading-[100%] text-[2.5rem] w-[20.4375rem] sm:w-[23.5rem] sm:text-[3.5rem] ${styles}`}
    >
      {text}
    </h1>
  );
};

export default Title;
