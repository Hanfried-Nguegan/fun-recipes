import React, { useState, useEffect } from "react";
import AddDessert from "./AddDessert";
import RecipeCard from "./RecipeCard";
import sanityClient from "../../sanity";
import { urlFor } from "../../sanity";

const RecipesCardRight = () => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "dessert"] {
            ...,
        }`
      )
      .then((data) => {
        setDesserts(data);
      });
  }, []);

  return (
    <>
      <div className="flex absolute bottom-[3%] left-[30%] overflow-scroll overflow-y-hidden scroll-smooth scrollbar-hide max-w-[70%] ">
        {desserts.slice(0, 3).map((dessert) => (
          <RecipeCard
            key={dessert._id}
            index={dessert._id}
            title={dessert.name}
            image={urlFor(dessert.image).url()}
            description={dessert.description}
            timer={dessert.timer}
            ingredients={dessert.ingredients}
            recipe={dessert.recipe}
          />
        ))}
        <div className="ml-5 mr-3">
          <AddDessert />
        </div>
      </div>
    </>
  );
};

export default RecipesCardRight;
