import React, { useState } from "react";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Donut from "./Donut";
import TextRight from "./TextRight";
import ArrowImageRight from "./ArrowImageRight";
import RecipesCardRight from "./RecipesCardRight";

const RightSide = () => {
  const [showArrowButton, setShowArrowButton] = useState(true);

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 20 },
  };

  return (
    <section
      className="split right bg-pinkychoco"
      onMouseEnter={() => setShowArrowButton(false)}
      onMouseLeave={() => setShowArrowButton(true)}
    >
      <div className="absolute inset-y-0 right-0 w-28 flex items-center justify-center">
        <motion.div
          variants={variants}
          initial="visible"
          animate={showArrowButton ? "visible" : "hidden"}
          transition={{ duration: 1 }}
          className="absolute z-50 bg-[#635dad] rounded-l-full w-[50px] transition-all duration-500 h-[40px] p-[8px] top-1/2 right-0 transform -translate-y-1/2 text-white cursor-pointer"
        >
          <ArrowForwardIcon />
        </motion.div>
      </div>
      <Donut />
      <TextRight />
      <ArrowImageRight />
      <RecipesCardRight />
    </section>
  );
};

export default RightSide;
