import React from "react";

const Button = ({ text, onClick, onKeyUp }) => {
  return (
    <button
      type="button"
      className="w-full sm:w-[100%] h-[3.5rem] bg-darkNavy text-white font-bold text-[1rem] border-none rounded-[0.5rem] cursor-pointer transition-all hover:bg-gradient-to-r from-gradientStart to-gradientEnd hover:shadow-1 hover:shadow-boxShadow"
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      {text}
    </button>
  );
};

export default Button;
