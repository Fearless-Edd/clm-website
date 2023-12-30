import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { logo } from "../assets/images/index";
import PrimaryBtn from "../component/PrimaryBtn";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative mg:mx-">
      <div className="flex justify-between items-center px-5 py-5 sm:h-[80px] lg:h-[110px] lg:gap-10">
        <div className="">
          <img
            src={logo}
            alt=""
            className="w-[180px] sm:w-[120px] md:w-[240px] lg:w-[360px]"
          />
        </div>
        <div
          className="text-2xl md:text-xl font-bold md:block text-herotext lg:hidden"
          onClick={toggleDropdown}
        >
          <FaBars />
        </div>
        <nav className="hidden  items-center space-x-8 gap[40px] font-normal text-[16px] md:hidden lg:flex ">
          {/* Conditionally render based on screen size */}
          <a href="#home" className="hidden md:block">
            Home
          </a>
          <a href="#services" className="hidden md:block">
            About Us
          </a>
          <a href="#portfolio" className="hidden md:block">
            What We Do
          </a>
          <a href="#portfolio" className="hidden md:block">
            Media
          </a>
          <a href="#portfolio" className="hidden md:block">
            Contact
          </a>
        </nav>
        <div className="hidden  justify-center items-center lg:block">
          <PrimaryBtn title="Donate" textColor="#FFFFFF" bgColor="#000000" />
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute top-15 right-0 bg-herotext border border-gray-300 shadow-md rounded-md p-5 w-full flex justify-between lg:hidden ">
          <nav className="flex flex-col gap-2 font-normal lg:hidden md:flex">
            <a href="#home" className="">
              Home
            </a>
            <a href="#services" className=" ">
              About Us
            </a>
            <a href="#portfolio" className=" ">
              What We Do
            </a>
            <a href="#portfolio" className="">
              Media
            </a>
            <a href="#portfolio" className=" ">
              Contact
            </a>
          </nav>
          <div>
            <PrimaryBtn title="Donate" textColor="#FFFFFF" bgColor="#000000" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
