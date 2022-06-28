import React from "react";
import Intro from "../components/intro";

function About() {
  return (
    <div
      className="w-full h-full bg-fixed
      bg-gradient-to-r 
    from-blue-200 
    to-orange-500 
    via-purple-500
      animate-gradient-x
    "
    >
      <Intro />
    </div>
  );
}

export default About;
