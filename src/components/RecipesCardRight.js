import React from "react";
import Image from "next/image";
import { recipesDataRight } from "@/constants";

const RecipeCard = ({ id, image, title, timer, description }) => {
  return (
    <div className="absolute bg-white w-[140px] md:w-[180px] min-h-[220px] bottom-[5%] left-[42%] rounded-[10px] cursor-pointer">
      <div className="relative">
        <Image src={image} alt="image" />
        <div className="absolute bottom-0 -left-1/2 transform translate-x-1/2 translate-y-1/2 flex items-center justify-between p-2 w-full">
          <h1 className="font-bold textstyle text-md md:text-lg lg:text-xl">
            {title}
          </h1>
          <p className="flex flex-col items-center bg-[#625eaf] rounded-full text-white p-2 text-xs md:text-md leading-3 font-semibold">
            {timer}
            <br /> <span className="text-white ">min</span>
          </p>
        </div>
      </div>

      <h3 className="text-xs font-semibold text-left mt-3 p-2 leading-3">
        {description}
      </h3>
    </div>
  );
};

const RecipesCardRight = () => {
  return (
    <div>
      {recipesDataRight.map((recipe, index) => (
        <RecipeCard key={recipe.title} index={index} {...recipe} />
      ))}
    </div>
  );
};

export default RecipesCardRight;
