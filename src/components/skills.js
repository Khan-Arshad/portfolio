import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/js.png";
import ReactJS from "../assets/react.png";
import Photoshop from "../assets/photoshop.png";
import Illustrator from "../assets/illustrator.png";
import Indesign from "../assets/indesign.png";
import Figma from "../assets/figma.png";

const Skills = () => {
  return (
    <div className="max-w-[1000px] mx-auto sm:pt-auto pt-20 px-8 flex flex-col justify-center sm:h-screen h-full z-10">
      <div>
        <p className="text-4xl font-bold inline border-b-4 border-[#000]">
          Skills
        </p>
        <p className="py-4">
          These are some of the technologies I've worked with
        </p>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4">
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 bg-white bg-opacity-25 rounded-lg bg-clip-padding blur-effect">
          <img className="h-20 mx-auto" src={HTML} alt="HTML Logo" />
          <p className="mt-4">HTML</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 bg-white bg-opacity-25 rounded-lg bg-clip-padding blur-effect">
          <img className="h-20 mx-auto" src={CSS} alt="CSS Logo" />
          <p className="mt-4">CSS</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 bg-white bg-opacity-25 rounded-lg bg-clip-padding blur-effect">
          <img className="h-20 mx-auto" src={JS} alt="javascript Logo" />
          <p className="mt-4">JAVASCRIPT</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 bg-white bg-opacity-25 rounded-lg bg-clip-padding blur-effect">
          <img className="h-20 mx-auto" src={ReactJS} alt="React Logo" />
          <p className="mt-4">REACT</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 bg-white bg-opacity-25 rounded-lg bg-clip-padding blur-effect">
          <img className="h-20 mx-auto" src={Photoshop} alt="Photoshop Logo" />
          <p className="mt-4">PHOTOSHOP</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 bg-white bg-opacity-25 rounded-lg bg-clip-padding blur-effect">
          <img
            className="h-20 mx-auto"
            src={Illustrator}
            alt="Illustrator Logo"
          />
          <p className="mt-4">ILLUSTRATOR</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 bg-white bg-opacity-25 rounded-lg bg-clip-padding blur-effect">
          <img className="h-20 mx-auto" src={Indesign} alt="Indesign Logo" />
          <p className="mt-4">INDESIGN</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 bg-white bg-opacity-25 rounded-lg bg-clip-padding blur-effect">
          <img className="h-20 mx-auto" src={Figma} alt="Figma Logo" />
          <p className="mt-4">FIGMA</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
