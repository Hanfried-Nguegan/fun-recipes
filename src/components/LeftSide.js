import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextLeft from "./TextLeft";
import ArrowImageLeft from "./ArrowImageLeft";

const LeftSide = () => {
  const [slideLeft, setSlideLeft] = useState(false);
  return (
    <section className="split left bg-[#fefcfe]">
      <div className="absolute inset-y-0 left-0 w-28 flex items-center justify-center">
        <ArrowBackIcon
          className="absolute z-50 bg-[#ecddc2] rounded-r-full w-[50px] hover:w-[55px] h-[40px] p-[8px] top-1/2 left-0 transform -translate-y-1/2 transition-all duration-500 text-white cursor-pointer"
          onClick={() => {
            setSlideLeft(true);
          }}
        />
      </div>
      <TextLeft />
      <ArrowImageLeft />
    </section>
  );
};

export default LeftSide;
