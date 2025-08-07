"use client"; // for Next.js App Router

import Image from "next/image";
import { useState } from "react";

const RegisterFrom = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const inputFieldStyles = "w-full p-3 border rounded bg-[#EBEBEB]";
  const inputFieldLabelStyles = "block text-sm font-medium text-[#000] mb-2";

  return (
    <div className="bg-[#F5F1EA] py-16 flex items-center justify-center">
      <div className="bg-[#FFF] rounded-lg shadow-sm flex w-full max-w-5xl overflow-hidden p-6 space-x-6">
        {/* Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/2">
          <Image
            src="/registrationImage.png"
            width={600}
            height={600}
            alt="Study"
            className="w-full h-fit rounded"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-6 text-[#000]">Sign up</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex space-x-4">
              <div className="w-full">
                <label className={inputFieldLabelStyles}>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={form?.firstName}
                  onChange={handleChange}
                  className={inputFieldStyles}
                />
              </div>
              <div className="w-full">
                <label className={inputFieldLabelStyles}>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={form?.lastName}
                  onChange={handleChange}
                  className={inputFieldStyles}
                />
              </div>
            </div>

            <div>
              <label className={inputFieldLabelStyles}>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form?.email}
                onChange={handleChange}
                className={inputFieldStyles}
              />
            </div>

            <div>
              <label className={inputFieldLabelStyles}>New Password</label>
              <input
                type="password"
                name="password"
                placeholder="New Password"
                value={form?.password}
                onChange={handleChange}
                className={inputFieldStyles}
              />
            </div>

            <div>
              <label className={inputFieldLabelStyles}>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form?.confirmPassword}
                onChange={handleChange}
                className={inputFieldStyles}
              />
            </div>

            <label className="flex items-center space-x-2 text-sm text-[#000] cursor-pointer">
              <input
                type="checkbox"
                name="agree"
                checked={form?.agree}
                onChange={handleChange}
              />
              <span>
                I agree to the{" "}
                <a href="#" className="text-[#366ED7]">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#366ED7]">
                  Privacy Policy
                </a>
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-[#FFA41F] text-white py-3 rounded"
            >
              Sign up
            </button>
          </form>

          <div className="my-4 flex items-center">
            <hr className="flex-grow border-[#7D7D7D]" />
            <span className="px-2 text-[#000] text-sm">or</span>
            <hr className="flex-grow border-[#7D7D7D]" />
          </div>

          <div className="flex space-x-4">
            <button className="flex gap-1.5 items-center justify-center w-full bg-[#FFA41F29] text-[#000] rounded py-3 cursor-pointer">
              <Image
                src="/icons/google.svg"
                width={50}
                height={50}
                alt=""
                className="w-6 h-6 object-contain"
              />
              Google
            </button>
            <button className="flex gap-1.5 items-center justify-center w-full bg-[#FFA41F29] text-[#000] rounded py-3 cursor-pointer">
              <Image
                src="/icons/facebook.svg"
                width={50}
                height={50}
                alt=""
                className="w-6 h-6 object-contain"
              />
              Facebook
            </button>
          </div>

          <p className="text-sm text-center text-[#7D7D7D] mt-4">
            Already have an account?{" "}
            <a href="/auth/login" className="text-[#FFA41F]">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterFrom;
