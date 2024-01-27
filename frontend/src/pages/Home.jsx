import "../assets/font/global.css";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import {
  About,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  wwd,
  subimg,
  sub2,
  sub3,
} from "../assets/images";
import React from "react";
import PrimaryBtn from "../component/PrimaryBtn";
import Services from "../component/Services";
import { FaCity } from "react-icons/fa";
import Item from "../component/Items";
// import ChartResults from "../component/ChartResults";

const Home = () => {
  const servicesData = [
    {
      icon: <FaCity />,
      title: "Church Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      icon: <FaCity />,
      title: "Church Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      icon: <FaCity />,
      title: "Church Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      icon: <FaCity />,
      title: "Church Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ];

  const itemsData = [
    {
      image: subimg,
      title: "Cross Sessions Easter Celebrations",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      btnText: "Learn More",
    },
    {
      image: sub2,
      title: "ECO-Panthers",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      btnText: "Coming Soon",
    },
    {
      image: sub3,
      title: "Monthly public awareness",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      btnText: "Learn More",
    },
  ];

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
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
            <h1 className="font-bold  text-btnColor lg:pb-10 lg:text-4xl">
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
          </div>
        </div>
        <div className="flex justify-center items-center lg:w-1/2">
          <img src={About} alt="" />
        </div>
      </div>

      {/* Our Suppouters */}
      <div className="px-5 md:px-20 lg:py-10">
        <h1 className="font-semibold py-4 md:font-bold">Our Suppouters</h1>
        <div className="grid grid-cols-3 gap-5 lg:grid-cols-6">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>
      </div>

      {/* what we do  */}
      <div className="px-10 py-5 md:px-16 lg:px-20 md:flex justify-evenly items-center gap-10 bg-foregrround ">
        <div className="flex flex-col gap-3 lg:w-1/3 lg:flex-row">
          <div className="w-20 h-1 bg-black md:w-1/ mt-3"></div>
          <div className="flex flex-col gap-2">
            <h2 className="">What We Do</h2>
            <h1 className="font-semibold text-xl">
              Some services we provide for our community
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="">
              {servicesData.map((service, index) => (
                <Services
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  desc={service.desc}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-fu h-auto">
          <img src={wwd} alt="" />
        </div>
      </div>

      {/* projects we have done  */}
      <div className="px-5 py-5 md:px-16 lg:px-20">
        <div>
          <div className="md:flex gap-2">
            <div className="w-20 h-1 bg-black md:w-1/1 mt-3"></div>
            <div className="">
              <p>Projects We Have Done</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold  text-btnColor lg:pb-10 lg:text-4xl">
              We are creating a place <br /> where children with special <br />{" "}
              needs can thrive
            </h1>
          </div>
        </div>
        <div className="pt-10  text-white grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {itemsData.map((item, index) => (
            <Item
              key={index}
              image={item.image}
              title={item.title}
              text={item.text}
              btnText={item.btnText}
            />
          ))}
        </div>
      </div>

      {/* Chart section  */}
      <div>
        <div className="bg-black text-white w-full h-auto px-5 py-5 md:px-16 lg:px-20">
          <div className="w-1/2">
            <h1 className="font-bold lg:text-4xl">
              How we spend your <br/> donations and where it goes
            </h1>
            <p className="py-2">We understand that when you make a  donation, you want to know exactly where your money is going and we pledge to be transparent.</p>
          </div>

          <div>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
