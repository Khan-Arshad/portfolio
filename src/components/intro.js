import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen px-6 mx-auto z-10">
      <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-[#000]">
            About Me
          </p>
        </div>
        <div></div>
      </div>
      <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
        <div className="sm:text-right text-4xl font-bold">
          <p>
            Hi, I'm Arshad, Welcome to my portfolio. Have a look at some of my
            work
          </p>
        </div>
        <div>
          <p>
            I am a digital designer and developer. Born in South africa, now
            living in the U.K. Proficient in a range of design programs and
            familiar with development languages, I can help you to achieve your
            digital vision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
