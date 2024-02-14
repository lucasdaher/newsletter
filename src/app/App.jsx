import React from "react";

import { useForm } from "react-hook-form";
import validator from "validator";

import { Link } from "react-router-dom";

import backgroundDesktop from "../assets/illustration-sign-up-desktop.svg";
import backgroundMobile from "../assets/illustration-sign-up-mobile.svg";

import iconList from "../assets/icon-list.svg";
import { useEffect } from "react";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    document.body.className =
      "flex flex-col justify-center items-center w-full bg-dark-navy min-h-screen max-[480px]:bg-white";
  }, []);

  return (
    <div className="flex flex-col-reverse sm:flex-row w-container h-auto bg-white p-container rounded-container transition-all duration-200">
      {/* Form */}
      <div className="p-formContainer flex flex-col gap-1">
        <h1 className="text-dark-navy text-h1 font-bold leading-title">
          Stay updated!
        </h1>
        <p className="w-paragraph">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <div className="m-form">
          <div className="flex flex-row justify-start items-center gap-list m-list">
            <img src={iconList} alt="Verified Icon" />
            <p className="text-dark-navy text-p font-regular">
              Product discovery and building what matters
            </p>
          </div>

          <div className="flex flex-row justify-start items-center gap-list m-list">
            <img src={iconList} alt="Verified Icon" />
            <p>Measuring to ensure updates are a success</p>
          </div>

          <div className="flex flex-row justify-start items-center gap-list">
            <img src={iconList} alt="Verified Icon" />
            <p>And much more!</p>
          </div>
        </div>

        <form className="flex flex-col">
          <label
            htmlFor="email"
            className="flex flex-row justify-between items-center text-dark-navy text-label font-bold leading-label m-label"
          >
            Email address
            {errors?.email && (
              <p className="text-red">{errors?.email?.message}</p>
            )}
          </label>

          <div className="">
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
          </div>

          <button
            type="button"
            className="w-button h-button bg-dark-navy text-white font-bold text-button border-none rounded-input cursor-pointer transition-all hover:bg-gradient-to-r from-gradient-start to-gradient-end hover:shadow-button hover:shadow-boxShadow"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit)();
            }}
          >
            <Link to={`/success`} className="no-underline text-white font-bold">
              Subscribe to monthly newsletter
            </Link>
          </button>
        </form>
      </div>

      {/* Image */}
      <div className="flex flex-col">
        <img
          src={backgroundMobile}
          alt="Background Image"
          className="flex w-full sm:hidden"
        />
        <img
          src={backgroundDesktop}
          alt="Background Image"
          className="hidden sm:flex"
        />
      </div>
    </div>
  );
};

export default App;
