import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const LeftSide = () => {
  return (
    <section className="absolute w-[50%] left-0 h-screen bg-white">
      <div className="absolute inset-y-0 left-0 w-28 flex items-center justify-center">
        <ArrowBackIcon className="absolute bg-[#ecddc2] rounded-r-full w-[50px] hover:w-[55px] h-[40px] p-[8px] top-1/2 left-0 transform -translate-y-1/2 transition-all duration-500 text-white cursor-pointer" />{" "}
      </div>
    </section>
  );
};

export default LeftSide;
