import React from "react";
import { recipesDataRight } from "@/constants";
import AddRecipe from "./AddRecipe";
import RecipeCard from "./RecipeCard";

const RecipesCardRight = () => {
  return (
    <>
      <div className="flex absolute bottom-[3%] left-[30%] overflow-scroll scroll-smooth scrollbar-hide max-w-[70%] ">
        {recipesDataRight.map((recipe, index) => (
          <RecipeCard key={recipe.title} index={index} {...recipe} />
        ))}
        <div className="ml-5 mr-3">
          <AddRecipe />
        </div>
      </div>
    </>
  );
};

export default RecipesCardRight;
