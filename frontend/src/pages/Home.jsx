import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import { About } from "../assets/images/index";

import React from "react";
import PrimaryBtn from "../component/PrimaryBtn";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* Konw about Us  */}
      <div className="px-5 py-5 flex flex-col gap-5 md:px-16 lg:flex-row ">
        <div className="flex flex-col justify-center gap-5 md:flex-row lg:w-1/2 ">
          <div className="w-20 h-1 bg-black md:w-1/4 mt-3"></div>
          <div className="flex flex-col gap-10">
            <p className="font-semibold text-xl lg:pb-10">Know About us</p>
            <h1 className="font-bold text-2xl text-btnColor lg:pb-10 lg:text-4xl">
              CLM Native prioritizes community sensitization
            </h1>
            <div className="lg:text-xl ">

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <p className="">
              ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
              ut commodo diam libero vitae erat.Aenean faucibus nibh et justo
              cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
              tristique posuere.
            </p>
            </div>
        <PrimaryBtn title="Learn More" textColor="#FFFFFF" bgColor="#BE1E2D" />

          </div>
        </div>
        <div className="flex justify-center items-center lg:w-1/2">
          <img src={About} alt="" />
        </div>
      </div>


    </div>
  );
};

export default Home;
