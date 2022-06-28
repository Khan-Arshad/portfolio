import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen z-10">
      <p className="text-gray-700">Hi, my name is</p>
      <h1 className="text-4xl sm:text-7xl font-bold text-[#000000]">
        Arshad Khan
      </h1>
      <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 ">
        I'm a digital designer and developer
      </h2>
      <p className=" text-gray-900 py-4 max-w-[700px] ">
        Welcome to my portfolio - This site was built with React JS and Tailwind
        CSS
      </p>
      <div>
        <button className="group text-gray-700 border-gray-700 border-2 px-6 py-3 my-2 flex items-center hover:border-gray-900 hover:text-gray-900 duration-500">
          View Work
          <span className="group-hover:rotate-90 duration-500">
            <HiArrowNarrowRight className="ml-3" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
