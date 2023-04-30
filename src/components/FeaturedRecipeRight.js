import React from "react";
import { FeaturedDataRight } from "@/constants";

const FeaturedCard = () => {
  return (
    <div className="relative z-50 bg-white min-w-[260px] md:w-[400px] lg:w-[460px] min-h-[250px] md:h-[250px] lg:h-[270px] rounded-[10px] ">
      <div className="z-40">
        <div className="absolute -top-3 -right-16 md:-top-2 md:-right-20 lg:-top-2 lg:-right-24">
          <p className="textstyle flex flex-col text-[22px] md:text-[26px] lg:text-[30px] text-[#e5799b] leading-6 items-center justify-center rotate-12 ">
            <span>sweet</span>
            <span>life</span>
          </p>
        </div>
      </div>
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
