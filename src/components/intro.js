import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen px-6 mx-auto z-10">
      <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
        <div className="sm:text-right py-8 pl-4">
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-[#000]">
            About Me
          </p>
        </div>
        <div></div>
      </div>
      <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
        <div className="sm:text-right text-4xl font-bold">
          <p>
            Hi, I'm Arshad, Welcome to my portfolio.
          </p>
        </div>
        <div>
          <p>
            I am a digital designer and developer. Born in South africa, currently
            living in the U.K.<br/>
            I'm proficient in a range of design programs and  front-end development languages.
            <br/>
            I have a passion for creating beautiful and functional websites. <br/>I am a self-taught developer and studied Graphic and Web Design at <a href="https://keyline.co.za/courses/graphic-design-and-web-design/" className="text-gray-700">Keyline Digital Design College</a> in South Africa. <br/>I have a passion for learning and constantly learning new things. I am always looking to improve my skills and knowledge. 
            <br/>
            I am currently working on an 
            <a 
            href="https://personal-issue-tracker.herokuapp.com/
            "
            className="text-gray-700">
               &nbsp;Issue Tracking project&nbsp;
              </a> 
              built with React, Tailwind and Firebase, hosted on Heroku. 

          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
