import React from "react";

const Services = ({ icon, title, desc }) => {
  return (
    <div>
      <div className="flex gap-2 items-start py-2">
        <div className="text-2xl">{icon}</div>
        <div className="">
          <h1 className="font-bold text-xl ">{title}</h1>
          <p className="text-[16px]">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
