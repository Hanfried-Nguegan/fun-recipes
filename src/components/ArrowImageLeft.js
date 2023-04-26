import React from "react";
import Image from "next/image";
import { arrowLeft } from "@/assets";

const ArrowImageLeft = () => {
  return (
    <div className="absolute top-[70%] md:top-[75%] right-[15%]">
      <Image
        src={arrowLeft}
        alt="arrow"
        className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 transform -scale-x-100 rotate-360"
      />
    </div>
  );
};

export default ArrowImageLeft;
