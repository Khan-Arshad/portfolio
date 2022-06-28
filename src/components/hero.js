import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

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
        <Link to="/portfolio">
          <button className="group text-gray-700 border-gray-700 border-2 px-6 py-3 my-2 flex items-center hover:border-gray-900 hover:text-gray-900 duration-500">
            View Work
            <span className="group-hover:rotate-180 duration-500">
              <HiArrowNarrowLeft className="mx-3" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
