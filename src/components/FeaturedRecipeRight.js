import React from "react";
import { featuredDataRight } from "@/constants";
import SweetLife from "./SweetLife";
import Image from "next/image";
import { blueberry } from "@/assets";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const FeaturedCard = ({ image, title, timer, ingredients }) => {
  return (
    <div className="relative bg-white min-w-[240px] md:w-[400px] lg:w-[460px] min-h-[250px] md:h-[250px] lg:h-[270px] rounded-[10px] shadow-xl">
      <div className="flex items-center w-full h-full">
        <div className="w-[48%] h-full relative">
          <Image
            src={image}
            alt="image"
            className="min-h-[250px] md:h-[250px] lg:h-[270px] w-full object-cover rounded-l-[10px]"
          />
        </div>
        <div className="flex flex-col w-[52%] h-full p-3">
          <h1 className="textstyle w-full flex-wrap font-bold text-[12px] md:text-[20px] lg:text-[25px]">
            {title}
          </h1>
          <ul className="mt-1 ">
            <li className="w-full text-[10px] md:text-[12px] lg:text-[14px] tracking-wider">
              {ingredients}
            </li>
          </ul>
          <div className="flex w-full items-center justify-between mt-2 ">
            <p className="flex flex-col items-center bg-[#625eaf] rounded-full text-white p-2 text-xs leading-3 font-semibold">
              {timer}
              <br /> <span className="text-white">min</span>
            </p>
            <p className="flex items-center bg-[#625eaf] rounded-full text-white p-2 text-[10px] md:text-sm leading-3 font-semibold ml-2">
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

const FeaturedRecipeRight = () => {
  return (
    <div className="absolute top-[18%] left-[34%] md:left-[32%]">
      {featuredDataRight.map((data, index) => (
        <FeaturedCard key={data.title} index={index} {...data} />
      ))}
    </div>
  );
};

export default FeaturedRecipeRight;
