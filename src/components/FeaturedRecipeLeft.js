import React, { useState, useEffect } from "react";
import FeaturedMain from "./FeaturedMain";
import sanityClient from "../../sanity";

const FeaturedRecipeLeft = () => {
  const [featuredMain, setFeaturedMain] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "main"] {
        ...,
        "imageUrl" : image.asset->url

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
        <FeaturedMain
          key={lastFeaturedMain._id}
          index={lastFeaturedMain._id}
          image={lastFeaturedMain.imageUrl}
          title={lastFeaturedMain.name}
          timer={lastFeaturedMain.timer}
          ingredients={lastFeaturedMain.ingredients}
        />
      )}
    </div>
  );
};

export default FeaturedRecipeLeft;
