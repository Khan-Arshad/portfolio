import React from "react";
import Hero from "../components/hero";

const Home = () => {
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
      <Hero />
    </div>
  );
};

export default Home;
