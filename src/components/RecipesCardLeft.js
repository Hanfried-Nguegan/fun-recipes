import React, { useState } from "react";
import Image from "next/image";
import { recipesDataLeft } from "@/constants";
import AddLeft from "./AddLeft";
import RecipeCard from "./RecipeCard";

const RecipesCardLeft = () => {
  return (
    <div className="flex absolute bottom-[3%] right-[32%] flex-row-reverse overflow-scroll overflow-y-hidden scrollbar-hide max-w-[70%]">
      {recipesDataLeft.map((recipe, index) => (
        <RecipeCard key={recipe.title} index={index} {...recipe} />
      ))}
      <div className="ml-5">
        <AddLeft />
      </div>
    </div>
  );
};

export default RecipesCardLeft;
