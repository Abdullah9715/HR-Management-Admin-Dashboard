"use client";
import img from "../../../assets/icons/Vector.svg";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
type Change = {
  target: {
    name: string;
    value: string;
  };
};
function page() {
  const router = useRouter();
  const [state, setState] = useState({ email: "", password: "", name: "" });
  const handleChange = (e: Change) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { email, password, name } = state;
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });

    const userInfo = response;
    console.log("🚀 ~ handleSubmit ~ response:", response);
    console.log("🚀 ~ handleSubmit ~ userInfo:", userInfo);
    router.push("/api/auth/login");
    console.log("email", email);
    console.log("password", password);
    console.log("name", name);
  };
  return (
    <section className="bg-black h-screen flex justify-center items-center w-full text-white ">
      <div className="flex flex-col items-center w-[445px] h-[561px] justify-center bg-secondry px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-fullrounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <Image src={img} alt="Icon" className="max-w-[409px] max-h-[166px]" />
          <div className="p-6 sm:p-8">
            <p className="text-2xl font-bold mb-2 md:text-3xl dark:text-white">
              Wellcome
            </p>
            <p className="text-base mb-4">Please login heres</p>
            <form
              className="space-y-4 md:space-y-6 max-w-[445px]"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Name
                </label>
                <input
                  type="username"
                  onChange={handleChange}
                  name="name"
                  id="name"
                  className="border-2  text-black sm:text-sm rounded-lg block w-full p-2.5  focus:border-primary focus:outline-none "
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  name="email"
                  id="email"
                  className="border-2  text-black sm:text-sm rounded-lg block w-full p-2.5  focus:border-primary focus:outline-none "
                  placeholder="Your email address"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="border-2  text-black sm:text-sm rounded-lg block w-full p-2.5  focus:border-primary focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-prborder-primary dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don You have an account
                <Link
                  href={"/api/auth/login"}
                  className="font-medium ms-1 text-primary hover:underline dark:text-primary-500"
                >
                  SignIn
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
