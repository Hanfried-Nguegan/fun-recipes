import React from "react";
import Image from "next/image";
import { arrowLeft } from "@/assets";

const ArrowImageLeft = () => {
  return (
    <div className="absolute top-[68%] md:top-[70%] right-[15%]">
      <Image
        src={arrowLeft}
        alt="arrow"
        className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 transform -scale-x-100 rotate-360"
      />
    </div>
  );
};

export default ArrowImageLeft;
