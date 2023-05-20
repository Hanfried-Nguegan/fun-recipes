import React, { useState } from "react";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextLeft from "./TextLeft";
import ArrowImageLeft from "./ArrowImageLeft";
import RecipesCardLeft from "./RecipesCardLeft";
import FeaturedRecipeLeft from "./FeaturedRecipeLeft";

const LeftSide = ({ mainDishes }) => {
  const [showArrowButton, setShowArrowButton] = useState(true);
  const [showFeatured, setShowFeatured] = useState(false);
  const [showArrowImage, setShowArrowImage] = useState(true);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <section
      className="split left bg-[#fefcfe]"
      onMouseEnter={() => {
        setShowArrowButton(false);
        setShowFeatured(true);
        setShowArrowImage(false);
      }}
      onMouseLeave={() => {
        setShowArrowButton(true);
        setShowFeatured(false);
        setShowArrowImage(true);
      }}
    >
      <div className="absolute inset-y-0 left-0 w-28 flex items-center justify-center">
        <motion.div
          variants={variants}
          initial="visible"
          animate={showArrowButton ? "visible" : "hidden"}
          transition={{ duration: 1 }}
          className="arrowLeft"
        >
          <ArrowBackIcon />
        </motion.div>
      </div>
      <TextLeft />
      <motion.div
        variants={variants}
        initial="visible"
        animate={showArrowImage ? "visible" : "hidden"}
        transition={{ duration: 1 }}
      >
        <ArrowImageLeft />
      </motion.div>
      <RecipesCardLeft mainDishes={mainDishes} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={showFeatured ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <FeaturedRecipeLeft />
      </motion.div>
    </section>
  );
};

export default LeftSide;
