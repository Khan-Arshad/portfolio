import React from "react";
import WorkImg from "../assets/work.gif";

const Work = () => {
  return (
    <div className="max-w-[1000px] mx-auto sm:pt-[200px] pt-20 px-8 flex flex-col justify-center sm:h-screen h-full z-20">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 text-gray-700 border-[#000]">
          Work
        </p>
        <p className="py-6">View some of my work</p>
        <p className="text-3xl font-bold inline text-gray-700 ">Web</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* div */}
        <div
          style={{ backgroundImage: `url(${WorkImg})` }}
          className="shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center mx-auto container content-div "
        >
          {/* Hover */}
          <div className="opacity-0 group-hover:opacity-95">
            <span className="text-2xl font-bold text-white tracking-wider">
              Wordpress Website
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#000] hover:bg-[#000] hover:text-white duration-500">
                  View Website
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* div */}
        <div
          style={{ backgroundImage: `url(${WorkImg})` }}
          className="shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center mx-auto container content-div "
        >
          {/* Hover */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider">
              Wordpress Website
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#000] hover:bg-[#000] hover:text-white duration-500">
                  View Website
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* div */}
        <div
          style={{ backgroundImage: `url(${WorkImg})` }}
          className="shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center mx-auto container content-div "
        >
          {/* Hover */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider">
              Wordpress Website
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#000] hover:bg-[#000] hover:text-white duration-500">
                  View Website
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* div */}
        <div
          style={{ backgroundImage: `url(${WorkImg})` }}
          className="shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center mx-auto container content-div "
        >
          {/* Hover */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider">
              Wordpress Website
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#000] hover:bg-[#000] hover:text-white duration-500">
                  View Website
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* div */}
        <div
          style={{ backgroundImage: `url(${WorkImg})` }}
          className="shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center mx-auto container content-div "
        >
          {/* Hover */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider">
              Wordpress Website
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#000] hover:bg-[#000] hover:text-white duration-500">
                  View Website
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* div */}
        <div
          style={{ backgroundImage: `url(${WorkImg})` }}
          className="shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center mx-auto container content-div "
        >
          {/* Hover */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider">
              Wordpress Website
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#000] hover:bg-[#000] hover:text-white duration-500">
                  View Website
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
