import React from "react";

const Button = ({ text, onClick, onKeyUp }) => {
  return (
    <button
      type="button"
      className="w-[20.4375rem] h-[3.5rem] bg-darkNavy text-white font-bold text-[1rem] border-none rounded-[0.5rem] cursor-pointer transition-all hover:bg-gradient-to-r from-gradientStart to-gradientEnd hover:shadow-1 hover:shadow-boxShadow sm:w-[23.5rem]"
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      {text}
    </button>
  );
};

export default Button;
