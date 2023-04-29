import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Donut from "./Donut";
import TextRight from "./TextRight";
import ArrowImageRight from "./ArrowImageRight";
import RecipesCardRight from "./RecipesCardRight";
import FeaturedRecipeRight from "./FeaturedRecipeRight";

const RightSide = () => {
  const [showArrowButton, setShowArrowButton] = useState(true);
  const [showFeatured, setShowFeatured] = useState(false);

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 20 },
  };

  return (
    <section
      className="split right bg-pinkychoco"
      onMouseEnter={() => {
        setShowArrowButton(false);
        setShowFeatured(true);
      }}
      onMouseLeave={() => {
        setShowArrowButton(true);
        setShowFeatured(false);
      }}
    >
      <div className="absolute inset-y-0 right-0 w-28 flex items-center justify-center">
        <motion.div
          variants={variants}
          initial="visible"
          animate={showArrowButton ? "visible" : "hidden"}
          transition={{ duration: 1 }}
          className="arrowright"
        >
          <ArrowForwardIcon />
        </motion.div>
      </div>
      <Donut />
      <TextRight />
      <ArrowImageRight />
      <RecipesCardRight />
      <motion.div
        initial={{ opacity: 0 }}
        animate={showFeatured ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <FeaturedRecipeRight />
      </motion.div>
    </section>
  );
};

export default RightSide;
