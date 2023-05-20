import React, { useState, useEffect } from "react";
import FeaturedDessert from "./FeaturedDessert";
import { sanityClient } from "../../sanity";

const FeaturedRecipeRight = () => {
  const [featuredDesserts, setFeaturedDesserts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "dessert"] {
            ...,
            "imageUrl" : image.asset->url
        }`
      )
      .then((data) => {
        setFeaturedDesserts(data);
      });
  }, []);

  const lastFeaturedDessert = featuredDesserts.slice(-1)[0];
  return (
    <div className="absolute top-[18%] left-[32%] md:left-[31.5%]">
      {lastFeaturedDessert && (
        <FeaturedDessert
          key={lastFeaturedDessert._id}
          index={lastFeaturedDessert._id}
          image={lastFeaturedDessert.imageUrl}
          title={lastFeaturedDessert.name}
          timer={lastFeaturedDessert.timer}
          ingredients={lastFeaturedDessert.ingredients}
        />
      )}
    </div>
  );
};

export default FeaturedRecipeRight;
