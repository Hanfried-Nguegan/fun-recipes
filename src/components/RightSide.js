import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Donut from "./Donut";
import TextRight from "./TextRight";
import ArrowImageRight from "./ArrowImageRight";
import RecipesCardRight from "./RecipesCardRight";
import { motion } from "framer-motion";

const RightSide = () => {
  const [slideRight, setSlideRight] = useState(false);

  return (
    <section className="split right bg-pinkychoco">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: slideRight ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-y-0 right-0 w-28 flex items-center justify-center"
      >
        <ArrowForwardIcon
          className="absolute z-50 bg-[#635dad] rounded-l-full w-[50px] hover:w-[55px] transition-all duration-500 h-[40px] p-[8px] top-1/2 right-0 transform -translate-y-1/2 text-white cursor-pointer"
          onClick={() => setSlideRight(true)}
        />
      </motion.div>
      <Donut />
      <TextRight />
      <ArrowImageRight />
      <RecipesCardRight />
    </section>
  );
};

export default RightSide;
