import React from "react";

const AddRecipe = () => {
  return (
    <div className=" min-w-[140px] md:w-[180px] min-h-[180px] md:h-[220px] rounded-[10px] border-[3px] border-white cursor-pointer">
      <div className="flex flex-col items-center justify-center h-full text-white">
        <span className="text-[25px] font-extrabold">+</span>
        <p className="textstyle text-[20px]">
          Add
          <br />
          your
          <br />
          recipe
        </p>
      </div>
    </div>
  );
};

export default AddRecipe;
