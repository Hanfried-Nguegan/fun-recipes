import React from "react";
import { arrowRight } from "@/assets";
import Image from "next/image";

const ArrowImageRight = () => {
  return (
    <div className="absolute top-[70%] md:top-[75%] left-[15%]">
      <Image
        src={arrowRight}
        alt="arrow"
        className="arrowRight w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 "
      />
    </div>
  );
};

export default ArrowImageRight;
