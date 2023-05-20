import React from "react";
import SweetLife from "./SweetLife";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const FeaturedMain = ({ image, title, timer, ingredients }) => {
  return (
    <div className="relative hidden md:flex bg-white min-h-full  min-w-[240px] md:w-[400px] lg:w-[560px] rounded-[10px] shadow-xl cursor-pointer">
      <div className="flex items-center w-full h-full">
        <div className="w-[48%] h-full relative">
          <Image
            src={image}
            alt="image"
            width={200}
            height={200}
            className="min-h-[250px] md:h-[250px] lg:h-[270px] w-full object-cover rounded-l-[10px]"
          />
        </div>
        <div className="flex flex-col w-[52%] h-full p-3">
          <h1 className="textstyle w-full flex-wrap font-bold text-[14px] md:text-[20px] lg:text-[25px]">
            {title}
          </h1>
          <ul className="mt-1 ">
            {ingredients.slice(0, 10).map((ingredient, index) => (
              <li
                key={index}
                className="w-full text-[8px] md:text-[8px] lg:text-[11px] font-semibold tracking-wider"
              >
                {ingredient}
              </li>
            ))}
          </ul>
          <div className="flex w-full items-center justify-between mt-3 ">
            <p className="flex flex-col items-center bg-[#625eaf] rounded-full text-white p-2 text-xs leading-3 font-semibold">
              {timer}
              <br /> <span className="text-white">min</span>
            </p>
            <p className="flex items-center bg-[#625eaf] rounded-full text-white p-2 text-[10px] md:text-[] leading-3 font-semibold ml-2">
              FULL RECIPE
              <span className="text-white">
                <ArrowForwardIcon />
              </span>
            </p>
          </div>
        </div>
      </div>
      <SweetLife />
    </div>
  );
};

export default FeaturedMain;
