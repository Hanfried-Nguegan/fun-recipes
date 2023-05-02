import React from "react";

const AddLeft = () => {
  return (
    <div className=" min-w-[140px] md:w-[180px] min-h-[180px] md:h-[220px] rounded-[10px] border-[3px] border-[#e5799b] cursor-pointer">
      <div className="flex flex-col items-center justify-center h-full text-[#e5799b]">
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

export default AddLeft;
