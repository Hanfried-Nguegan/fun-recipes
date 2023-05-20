import React, { useState, useEffect } from "react";
import AddMainDish from "./AddMainDish";
import MainCard from "./MainCard";
import { sanityClient } from "../../sanity";
const RecipesCardLeft = ({ mainDishes }) => {
  const [mainDish, setMainDish] = useState([]);

  return (
    <div className="flex absolute bottom-[3%] right-[32%] flex-row-reverse overflow-scroll scroll-smooth overflow-y-hidden scrollbar-hide max-w-[70%]">
      {mainDishes.slice(0, 3).map((main) => (
        <MainCard key={main._id} main={main} />
      ))}
      <div className="ml-10 mr-1">
        <AddMainDish />
      </div>
    </div>
  );
};

export default RecipesCardLeft;
