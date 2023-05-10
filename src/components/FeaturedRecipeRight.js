import React, { useState, useEffect } from "react";
import FeaturedCard from "./FeaturedCard";
import sanityClient from "../../sanity";
import { urlFor } from "../../sanity";

const FeaturedRecipeRight = () => {
  const [featuredDesserts, setFeaturedDesserts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "dessert"] {
            ...,
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
        <FeaturedCard
          key={lastFeaturedDessert._id}
          index={lastFeaturedDessert._id}
          image={urlFor(lastFeaturedDessert.image).url()}
          title={lastFeaturedDessert.name}
          timer={lastFeaturedDessert.timer}
          ingredients={lastFeaturedDessert.ingredients}
        />
      )}
    </div>
  );
};

export default FeaturedRecipeRight;
