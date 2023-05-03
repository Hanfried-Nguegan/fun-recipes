import React, { useState } from "react";
import Image from "next/image";

const RecipeCard = ({ image, title, timer, description }) => {
  const [isHover, setIsHover] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleCardClick = () => {
    setShowModal(!showModal);
  };

  const Modal = () => {
    const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
        setShowModal(false);
      }
    };
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
        onClick={handleBackdropClick}
      >
        <div className="bg-white rounded-lg p-4">
          <h1 className="font-bold text-lg mb-2">{title}</h1>
          <p className="text-sm mb-4">{description}</p>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className={`bg-white ml-5 min-w-[140px] md:w-[180px] min-h-[180px] md:h-[220px] rounded-[10px] shadow-2xl cursor-pointer ${
          isHover ? "scale-105" : ""
        } transition-all duration-500`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
      >
        <div className="relative">
          <Image src={image} alt="image" className="rounded-t-[10px]" />
          <div className="absolute bottom-0 -left-1/2 transform translate-x-1/2 translate-y-1/2 flex items-center justify-between p-2 w-full">
            <h1 className="font-bold textstyle text-sm md:text-md lg:text-lg">
              {title}
            </h1>
            <p className="flex flex-col items-center bg-[#625eaf] rounded-full text-white p-2 text-xs md:text-md leading-3 font-semibold">
              {timer}
              <br /> <span className="text-white">min</span>
            </p>
          </div>
        </div>

        <h3 className="text-xs font-semibold text-left mt-5 p-2 leading-3">
          {description}
        </h3>
      </div>
      {showModal && <Modal />}
    </>
  );
};

export default RecipeCard;
