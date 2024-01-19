import React from "react";
import PrimaryBtn from "../component/PrimaryBtn";

const Item = ({ image, text, title, btnText }) => (
  <div className="relative">
    <div className="absolute inset-0 flex items-start justify-center text-white p-5 lg:p-2  overflow-hidden object-contain
    ">
      <div className="flex flex-col gap-5 lg:gap-0">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-lg ">{text}</p>
        <PrimaryBtn title={btnText} textColor="#1D2130" bgColor="#FFFFFF" />
      </div>
    </div>
    <img
      src={image}
      alt=""
      className="w-full h-auto "
    />
  </div>
);

export default Item;
