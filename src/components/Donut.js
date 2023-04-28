import React from "react";
import { DonutCanvas } from "@/components/canvas";

const Donut = () => {
  return (
    <div className="absolute z-40 top-1/2 -left-0 transform -translate-x-1/2 -translate-y-1/2  h-[300px] md:h-[400px]">
      <DonutCanvas />
      <h1 className="textstyle absolute top-12 md:top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-3xl font-extrabold -rotate-12">
        <span className="text-[50px] md:text-[60px]">Choose</span> <br />
        <span className="font-medium text-[20px] md:text-[30px]">your </span>
        <span className="text-[30px] md:text-[50px]">Side</span>
      </h1>
    </div>
  );
};

export default Donut;
