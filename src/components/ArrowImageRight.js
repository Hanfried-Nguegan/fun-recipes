import React from "react";
import { arrowRight } from "@/assets";
import Image from "next/image";

const ArrowImageRight = () => {
  return (
    <div className="absolute top-[68%] md:top-[70%] left-[3%]">
      <Image
        src={arrowRight}
        alt="arrow"
        className="arrowRight w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 "
      />
    </div>
  );
};

export default ArrowImageRight;
