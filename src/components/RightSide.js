import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { DonutCanvas } from "@/components/canvas";

const RightSide = () => {
  return (
    <section className="absolute w-[50%] right-0 h-screen bg-[#f9c8db]">
      <div className="absolute inset-y-0 right-0 w-28 flex items-center justify-center">
        <ArrowForwardIcon className="absolute bg-[#635dad] rounded-l-full w-[50px] hover:w-[55px] transition-all duration-500 h-[40px] p-[8px] top-1/2 right-0 transform -translate-y-1/2 text-white cursor-pointer" />{" "}
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2  h-[300px] md:h-[400px]">
        <DonutCanvas />
        <h1 className="textstyle absolute top-12 md:top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-3xl font-extrabold -rotate-12">
          <span className="text-[50px]">Choose</span> <br />
          <span className="font-medium">your </span>
          <span className="text-[45px]">Side</span>
        </h1>
      </div>
    </section>
  );
};

export default RightSide;
