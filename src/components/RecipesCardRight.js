import React, { useState } from "react";
import Image from "next/image";
import { recipesDataRight } from "@/constants";
import AddRecipe from "./AddRecipe";

const RecipeCard = ({ image, title, timer, description }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div
      className={`bg-white ml-5 min-w-[120px] md:w-[180px] min-h-[160px] md:h-[220px] rounded-[10px] shadow-2xl cursor-pointer ${
        isHover ? "scale-105" : ""
      } transition-all duration-500`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <Image src={image} alt="image" className="rounded-t-[10px]" />
        <div className="absolute bottom-0 -left-1/2 transform translate-x-1/2 translate-y-1/2 flex items-center justify-between p-2 w-full">
          <h1 className="font-bold textstyle text-md md:text-lg lg:text-xl">
            {title}
          </h1>
          <p className="flex flex-col items-center bg-[#625eaf] rounded-full text-white p-2 text-xs md:text-md leading-3 font-semibold">
            {timer}
            <br /> <span className="text-white">min</span>
          </p>
        </div>
      </div>

      <h3 className="text-xs font-semibold text-left mt-5 p-2 leading-3">
        {description}
      </h3>
    </div>
  );
};

const RecipesCardRight = () => {
  return (
    <div className="flex absolute bottom-[3%] left-[38%] md:left-[30%] ">
      {recipesDataRight.map((recipe, index) => (
        <RecipeCard key={recipe.title} index={index} {...recipe} />
      ))}
      <div className="ml-5">
        <AddRecipe />
      </div>
    </div>
  );
};

export default RecipesCardRight;
