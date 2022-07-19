import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Logo from '../logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#0f0f0f54] text-gray-300 z-50">
      <div className="hover:text-gray-900 duration-500 cursor:pointer">
        <Link to="/"><img src={Logo} alt="logo"
        className="h-6 w-auto"
        /></Link>
      </div>
      {/* menu */}
      <nav>
        <ul className="hidden sm:flex">
          <li className="hover:text-gray-900 duration-500 cursor:pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-900 duration-500 cursor:pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-900 duration-500 cursor:pointer">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="hover:text-gray-900 duration-500 cursor:pointer">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="hover:text-gray-900 duration-500 cursor:pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* hamburger */}
      <div onClick={handleClick} className="sm:hidden z-10">
        <button className="cursor:pointer">
          {!nav ? <FaBars /> : <FaTimes />}
        </button>
      </div>

      {/* mobile */}
      <nav
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0f0f0f] flex flex-col justify-center items-center"
        }
      >
        <ul className="flex flex-col justify-center items-center">
          <li className="py-6 text-4xl hover:text-gray-900 duration-500 cursor:pointer">
            <Link onClick={handleClick} to="/">
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-gray-900 duration-500 cursor:pointer">
            <Link onClick={handleClick} to="/about">
              About
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-gray-900 duration-500 cursor:pointer">
            <Link onClick={handleClick} to="/skills">
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-gray-900 duration-500 cursor:pointer">
            <Link onClick={handleClick} to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-gray-900 duration-500 cursor:pointer">
            <Link onClick={handleClick} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* social */}
      <div className="hidden sm:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[110px] h-[30px] flex justify-between items-center ml-[-75px] hover:ml-[-10px] duration-500 bg-[#007bb5]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 text-[12px]"
            >
              LinkedIn <FaLinkedin size={15} />
            </a>
          </li>
          <li className="w-[110px] h-[30px] flex justify-between items-center ml-[-75px] hover:ml-[-10px] duration-500 bg-[#000000]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 text-[12px]"
            >
              GitHub <FaGithub size={15} />
            </a>
          </li>
          <li className="w-[110px] h-[30px] flex justify-between items-center ml-[-75px] hover:ml-[-10px] duration-500 bg-[#3b5998]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 text-[12px]"
            >
              Facebook <FaFacebook size={15} />
            </a>
          </li>
          <li className="w-[110px] h-[30px] flex justify-between items-center ml-[-75px] hover:ml-[-10px] duration-500 bg-[#dd4b39]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 text-[12px]"
            >
              Email <HiOutlineMail size={15} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
