import React from "react";
import NXM from "../assets/web/NXM.PNG";
import LinearCurve from "../assets/web/linearcurve.PNG";
import Firewatch from "../assets/web/firewatch.PNG";
import MyFlix from "../assets/web/myflix.PNG";
import IssueTracker from "../assets/web/issue-tracker.PNG";
import QuizApp from "../assets/web/quiz-app.PNG";

const Work = () => {
  return (
    <div className="max-w-[1000px] mx-auto sm:pt-[510px] md:pt-[245px] pt-20 px-8 flex flex-col justify-center sm:h-screen h-full z-20">
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
          style={{ backgroundImage: `url(${NXM})` }}
          className="shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center mx-auto container content-div duration-500"
        >
          {/* Hover */}
          <div className="opacity-0 group-hover:opacity-100 duration-500">
            <span className="text-1xl font-bold text-white text-center py-2">
              NXM Digital - Wordpress Website
            </span>
            <div className="pt-8 text-center">
              <a href="https://nxmdigital.com" target="_blank" rel="noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#000] hover:bg-[#000] hover:text-white duration-500">
                  View Website
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* div */}
        <div
          style={{ backgroundImage: `url(${LinearCurve})` }}
          className="shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center mx-auto container content-div duration-500"
        >
          {/* Hover */}
          <div className="opacity-0 group-hover:opacity-100 duration-500">
            <span className="text-1xl font-bold text-white text-center py-2">
              LinearCurve - HTML Website
            </span>
            <div className="pt-8 text-center">
              <a href="https://www.linearcurve.co.za" target="_blank" rel="noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#000] hover:bg-[#000] hover:text-white duration-500">
                  View Website
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* div */}
        <div
          style={{ backgroundImage: `url(${Firewatch})` }}
          className="shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center mx-auto container content-div duration-500"
        >
          {/* Hover */}
          <div className="opacity-0 group-hover:opacity-100 duration-500">
            <span className="text-1xl font-bold text-white text-center py-2">
              Firewatch - HTML Signup Page
            </span>
            <div className="pt-8 text-center">
              <a href="https://arshadk.co.za/portfolioItems/firewatch/" target="_blank" rel="noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#000] hover:bg-[#000] hover:text-white duration-500">
                  View Website
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* div */}
        <div
          style={{ backgroundImage: `url(${MyFlix})` }}
          className="shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center mx-auto container content-div duration-500"
        >
          {/* Hover */}
          <div className="opacity-0 group-hover:opacity-100 duration-500">
            <span className="text-1xl font-bold text-white text-center py-2">
              MyFlix - HTML Landing Page
            </span>
            <div className="pt-8 text-center">
              <a href="https://arshadk.co.za/portfolioItems/myflix/" target="_blank" rel="noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#000] hover:bg-[#000] hover:text-white duration-500">
                  View Website
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* div */}
        <div
          style={{ backgroundImage: `url(${IssueTracker})` }}
          className="shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center mx-auto container content-div duration-500"
        >
          {/* Hover */}
          <div className="opacity-0 group-hover:opacity-100 duration-500">
            <span className="text-1xl font-bold text-white text-center py-2">
              Issue Tracker - React Tailwind App
            </span>
            <div className="pt-8 text-center">
              <a href="https://personal-issue-tracker.herokuapp.com/" target="_blank" rel="noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#000] hover:bg-[#000] hover:text-white duration-500">
                  View App
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* div */}
        <div
          style={{ backgroundImage: `url(${QuizApp})` }}
          className="shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center mx-auto container content-div duration-500"
        >
          {/* Hover */}
          <div className="opacity-0 group-hover:opacity-100 duration-500">
            <span className="text-1xl font-bold text-white text-center py-2">
              Quiz App - React App
            </span>
            <div className="pt-8 text-center">
              <a href="https://quiz-app-reactjs-ak.herokuapp.com/" target="_blank" rel="noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#000] hover:bg-[#000] hover:text-white duration-500">
                  View App
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
