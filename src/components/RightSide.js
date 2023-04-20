import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const RightSide = () => {
  return (
    <section className="w-full h-screen bg-pinkychoco relative">
      <div className="absolute inset-y-0 right-0 w-28 flex items-center justify-center">
        <ArrowForwardIcon className="absolute bg-[#635dad] rounded-l-full w-[50px] hover:w-[60px] transition-all duration-500 h-[40px] p-[8px] top-1/2 right-0 transform -translate-y-1/2 text-white cursor-pointer" />{" "}
      </div>
    </section>
  );
};

export default RightSide;
