import React, { useState } from "react";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Donut from "./Donut";
import TextRight from "./TextRight";
import { arrowRight } from "@/assets";

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
      <div className="absolute top-[70%] md:top-[75%] left-[15%]">
        <Image
          src={arrowRight}
          alt="arrow"
          className="arrowRight w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 "
        />
      </div>
    </section>
  );
};

export default RightSide;
