import React from "react";
import Adhawk from "../assets/graphic/adhawk.png";
import Maelstrom from "../assets/graphic/maelstrom.png";
import MBPS from "../assets/graphic/mbps.png";
import NXM from "../assets/graphic/nxm.png";
import Royalpet from "../assets/graphic/royalpet.png";
import Solarspear from "../assets/graphic/solarspear.png";
import Trendyhouse from "../assets/graphic/trendyhouse.png";
import Trimpad from "../assets/graphic/trimpad.png";

const PortfolioItems = () => {
  return (
    <div className="max-w-[1000px] mx-auto sm:pt-[500px] md:pt-[245px] pt-20 px-8 flex flex-col justify-center h-full z-20">
      <div className="pb-8">
        <p className="text-3xl font-bold inline text-gray-700 ">Graphic</p>
      </div>
      {/* Cards */}

      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4">
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 bg-white  rounded-lg bg-clip-padding blur-effect">
          <img className="h-20 mx-auto" src={Adhawk} alt="AdhawkLogo" />
          <p className="mt-4">Logo</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 bg-white  rounded-lg bg-clip-padding blur-effect">
          <img className="h-20 mx-auto" src={Maelstrom} alt="Maelstrom Logo" />
          <p className="mt-4">Logo and Business Card</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 bg-white  rounded-lg bg-clip-padding blur-effect">
          <img className="h-20 mx-auto" src={MBPS} alt="MBPS Logo" />
          <p className="mt-4">Logo</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 bg-white  rounded-lg bg-clip-padding blur-effect">
          <img className="h-20 mx-auto" src={NXM} alt="NXM Logo" />
          <p className="mt-4">Logo</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 bg-white  rounded-lg bg-clip-padding blur-effect">
          <img className="h-20 mx-auto" src={Royalpet} alt="Royalpet Logo" />
          <p className="mt-4">Logo</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 bg-white  rounded-lg bg-clip-padding blur-effect">
          <img
            className="h-20 mx-auto"
            src={Solarspear}
            alt="Solarspear Logo"
          />
          <p className="mt-4">Logo</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 bg-white  rounded-lg bg-clip-padding blur-effect">
          <img className="h-20 mx-auto" src={Trendyhouse} alt="Trendyhouse Logo" />
          <p className="mt-4">Logo</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 bg-white  rounded-lg bg-clip-padding blur-effect">
          <img className="h-20 mx-auto" src={Trimpad} alt="Trimpad Logo" />
          <p className="mt-4">Logo</p>
        </div>
      </div>
    </div>
  );
};


export default PortfolioItems;
