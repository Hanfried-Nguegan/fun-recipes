import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Donut from "./Donut";
import TextRight from "./TextRight";
import ArrowImageRight from "./ArrowImageRight";
import RecipesCardRight from "./RecipesCardRight";

const RightSide = () => {
  const [slideRight, setSlideRight] = useState(false);

  return (
    <section
      className={`absolute w-[50%] right-0 h-screen bg-pinkychoco ${
        slideRight
          ? "w-full transition-all duration-1000 ease-cubic-bezier(0.87, 0.76, 0.33, 0.98)"
          : ""
      }`}
    >
      <div className="absolute inset-y-0 right-0 w-28 flex items-center justify-center">
        <ArrowForwardIcon
          className="absolute z-50 bg-[#635dad] rounded-l-full w-[50px] hover:w-[55px] transition-all duration-500 h-[40px] p-[8px] top-1/2 right-0 transform -translate-y-1/2 text-white cursor-pointer"
          onClick={() => setSlideRight(!slideRight)}
        />
      </div>
      <Donut />
      <TextRight />
      <ArrowImageRight />
      <RecipesCardRight />
    </section>
  );
};

export default RightSide;
