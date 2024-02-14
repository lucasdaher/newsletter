import React from "react";
import Button from "./Button";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import validator from "validator";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/success");
  };

  return (
    <form className="flex flex-col">
      <label
        htmlFor="email"
        className="flex flex-row justify-between items-center text-darkNavy text-[0.75rem] font-bold leading-[150%] mb-[0.5rem]"
      >
        Email address
        {errors?.email && <p className="text-red">{errors?.email?.message}</p>}
      </label>

      <input
        type="text"
        className={
          errors?.email
            ? `w-[23.5rem] h-auto py-[1rem] px-[1.5rem] rounded-[0.5rem] border-[1px] border-red text-red bg-bg-input-error placeholder:text-red/75 outline-red focus:font-regular mb-[1.5rem]`
            : `w-[23.5rem] h-auto py-[1rem] px-[1.5rem] rounded-[0.5rem] bg-transparent border-[1px] border-gray outline-darkNavy focus:font-regular text-darkNavy mb-[1.5rem]`
        }
        placeholder="email@company.com"
        {...register("email", {
          required: "Valid email required",
          validate: (value) =>
            validator.isEmail(value) || "Valid email required",
        })}
      />

      <Button
        text="Subscribe to monthly newsletter"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit)();
        }}
      />
    </form>
  );
};

export default Form;
