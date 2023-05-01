import React from "react";
import { FeaturedDataRight } from "@/constants";
import SweetLife from "./SweetLife";
import Image from "next/image";
import { blueberry } from "@/assets";

const FeaturedCard = ({ image, title, timer, ingredients }) => {
  return (
    <div className="relative bg-white min-w-[240px] md:w-[400px] lg:w-[460px] min-h-[250px] md:h-[250px] lg:h-[270px] rounded-[10px] shadow-xl">
      <div className="flex items-center w-full h-full">
        <div className="w-[48%] h-full relative">
          <Image
            src={blueberry}
            alt="image"
            className="min-h-[250px] md:h-[250px] lg:h-[270px] w-full object-cover rounded-l-[10px]"
          />
        </div>
        <div className="w-[52%] h-full"></div>
      </div>
      <SweetLife />
    </div>
  );
};

const FeaturedRecipeRight = () => {
  return (
    <div className="absolute top-[18%] left-[34%] md:left-[32%]">
      <FeaturedCard />
    </div>
  );
};

export default FeaturedRecipeRight;
