import React, { useState, useEffect } from "react";
import FeaturedCard from "./FeaturedCard";
import sanityClient from "../../sanity";
import { urlFor } from "../../sanity";

const FeaturedRecipeLeft = () => {
  const [featuredMain, setFeaturedMain] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "main"] {
        ...,
      }`
      )
      .then((data) => {
        setFeaturedMain(data);
      });
  }, []);

  const lastFeaturedMain = featuredMain.slice(-1)[0];

  return (
    <div className="absolute top-[18%] right-[32%] md:right-[31.5%]">
      {lastFeaturedMain && (
        <FeaturedCard
          key={lastFeaturedMain._id}
          index={lastFeaturedMain._id}
          image={urlFor(lastFeaturedMain.image).url()}
          title={lastFeaturedMain.name}
          timer={lastFeaturedMain.timer}
          ingredients={lastFeaturedMain.ingredients}
        />
      )}
    </div>
  );
};

export default FeaturedRecipeLeft;
