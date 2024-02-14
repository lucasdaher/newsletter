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
        className="flex flex-row justify-between items-center text-dark-navy text-label font-bold leading-label m-label"
      >
        Email address
        {errors?.email && <p className="text-red">{errors?.email?.message}</p>}
      </label>

      <input
        type="text"
        className={
          errors?.email
            ? `w-input h-auto p-input rounded-input border-1 border-red text-red bg-bg-input-error placeholder:text-red/75 outline-red focus:font-regular m-form`
            : `w-input h-auto p-input rounded-input bg-transparent border-1 border-gray outline-dark-navy focus:font-regular text-dark-navy m-form`
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
