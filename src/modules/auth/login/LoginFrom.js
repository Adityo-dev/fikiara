"use client"; // for Next.js App Router

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const inputFieldStyles =
    "w-full p-3 bg-[#EBEBEB] border border-[#EBEBEB] rounded-md outline-none focus:border-[#FFA41F] transition-colors";
  const inputFieldLabelStyles = "block text-sm font-medium text-[#000] mb-2";

  return (
    <div className="bg-[#F5F1EA] py-16 flex items-center justify-center">
      <div className="bg-[#FFF] rounded-lg shadow-sm flex w-full max-w-5xl overflow-hidden p-6 space-x-6">
        {/* Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/2">
          <Image
            src="/images/loginIllustration.jpg"
            width={600}
            height={600}
            alt="Login Illustration"
            className="w-full h-fit rounded"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-6 text-[#000]">Log in</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
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
              <label className={inputFieldLabelStyles}>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form?.password}
                onChange={handleChange}
                className={inputFieldStyles}
              />
            </div>

            <div className="flex items-center justify-between text-sm text-[#000]">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form?.remember}
                  onChange={handleChange}
                />
                <span>Remember me</span>
              </label>
              <Link href="/auth/forgot-password" className="text-[#366ED7]">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFA41F] text-white py-3 rounded"
            >
              Log in
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
                width={24}
                height={24}
                alt="Google"
                className="object-contain"
              />
              Google
            </button>
            <button className="flex gap-1.5 items-center justify-center w-full bg-[#FFA41F29] text-[#000] rounded py-3 cursor-pointer">
              <Image
                src="/icons/facebook.svg"
                width={24}
                height={24}
                alt="Facebook"
                className="object-contain"
              />
              Facebook
            </button>
          </div>

          <p className="text-sm text-center text-[#7D7D7D] mt-4">
            Don’t have an account?{" "}
            <Link href="/auth/register" className="text-[#FFA41F]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
