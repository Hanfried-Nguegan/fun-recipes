import React, { useState, useEffect } from "react";
import AddDessert from "./AddDessert";
import DessertCard from "./DessertCard";
import { sanityClient } from "../../sanity";

const RecipesCardRight = ({ desserts }) => {
  return (
    <>
      <div className="flex absolute bottom-[3%] left-[30%] overflow-scroll overflow-y-hidden scroll-smooth scrollbar-hide max-w-[70%] ">
        {desserts.slice(0, 3).map((dessert) => (
          <DessertCard key={dessert._id} dessert={dessert} />
        ))}
        <div className="ml-5 mr-3">
          <AddDessert />
        </div>
      </div>
    </>
  );
};

export default RecipesCardRight;
