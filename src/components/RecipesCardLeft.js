import React, { useState, useEffect } from "react";
import AddLeft from "./AddLeft";
import RecipeCard from "./RecipeCard";
import sanityClient from "../../sanity";
import { urlFor } from "../../sanity";

const RecipesCardLeft = () => {
  const [mainDish, setMainDish] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "main"] {
        ...,
      }`
      )
      .then((data) => {
        setMainDish(data);
      });
  }, []);
  return (
    <div className="flex absolute bottom-[3%] right-[32%] flex-row-reverse overflow-scroll scroll-smooth overflow-y-hidden scrollbar-hide max-w-[70%]">
      {mainDish.slice(0, 3).map((dish) => (
        <RecipeCard
          key={dish._id}
          index={dish._id}
          title={dish.name}
          image={urlFor(dish.image).url()}
          timer={dish.timer}
          description={dish.description}
          ingredients={dish.ingredients}
          recipe={dish.recipe}
        />
      ))}
      <div className="ml-8 mr-3">
        <AddLeft />
      </div>
    </div>
  );
};

export default RecipesCardLeft;
