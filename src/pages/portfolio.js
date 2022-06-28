import React from "react";
import PortfolioItems from "../components/portfolioItems";
import Work from "../components/work";

const Portfolio = () => {
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
      <Work />
      <PortfolioItems />
    </div>
  );
};

export default Portfolio;
