import React from "react";
import { FeaturedDataRight } from "@/constants";

const FeaturedCard = () => {
  return (
    <div className="bg-white min-w-[300px] md:w-[400px] lg:w-[460px] min-h-[220px] md:h-[250px] lg:h-[270px] rounded-[10px] "></div>
  );
};

const FeaturedRecipeRight = () => {
  return (
    <div className="absolute top-[18%] left-[36%] md:left-[32%]">
      <FeaturedCard />
    </div>
  );
};

export default FeaturedRecipeRight;
