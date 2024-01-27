import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import { heroImg } from '../assets/images/index';

const Hero = () => {
  return (
    <div>

    <div className="relative">
      <div className="p-5 md:p-10 lg:p-16 absolute">
        <h1 className="text-xl font-semibold text-white md:text-5xl md:py-10 lg:pb-10 lg:text-7xl">Feel the Gospel <br/> Be the Gospel <br/> Spread the Gospel</h1>
        <PrimaryBtn title="What we do" textColor="#1D2130" bgColor="#FFFFFF" />
      </div>
      <div className=" top-0 -z-10 right-0 w-full">
        <img
          src={heroImg}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
    </div>
  );
};

export default Hero;
