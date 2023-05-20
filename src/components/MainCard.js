import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

const MainCard = ({ main }) => {
  const [isHover, setIsHover] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleCardClick = () => {
    setShowModal(true);
  };

  const Modal = () => {
    const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
        setShowModal(false);
      }
    };

    const dropIn = {
      hidden: {
        y: "-100vh",
        opacity: 0,
      },
      visible: {
        y: "0",
        opacity: 1,
        transition: {
          duration: 0.1,
          type: "spring",
          damping: 25,
          stiffness: 500,
        },
      },
      exit: {
        y: "100vh",
        opacity: 0,
      },
    };

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
        onClick={handleBackdropClick}
      >
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white w-full md:w-[50%] rounded-lg p-4 cursor-pointer"
        >
          <div className="flex items-center justify-between border-b-[1px] border-b-gray-300">
            <h1 className="textstyle font-bold text-lg md:text-xl mb-2">
              {main.title}
            </h1>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <CloseIcon
                className="border border-black rounded-full"
                onClick={() => setShowModal(false)}
              />
            </motion.div>
          </div>

          <h2 className="text-sm md:text-base text-center mb-2">
            <span className="text-md md:text-lg font-bold">Ingredients: </span>
            {main.ingredients}
          </h2>
          <h3 className="text-sm md:text-base">{main.recipe}</h3>
        </motion.div>
      </div>
    );
  };
  return (
    <>
      <div
        className={`bg-white ml-5 min-w-[160px] md:w-[180px] min-h-[180px] md:h-[220px] rounded-[10px] shadow-xl cursor-pointer ${
          isHover ? "scale-105" : ""
        } transition-all duration-500`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
      >
        <div className="relative">
          <img
            src={main?.imageUrl}
            alt="image"
            className="rounded-t-[10px] w-full h-auto"
            width={100}
            height={100}
          />

          <div className="absolute bottom-0 -left-1/2 transform translate-x-1/2 translate-y-1/2 flex items-center justify-between p-2 w-full">
            <h1 className="font-bold textstyle text-sm md:text-md lg:text-lg">
              {main?.name}
            </h1>
            <p className="flex flex-col items-center bg-[#625eaf] rounded-full text-white p-2 text-xs md:text-md leading-3 font-semibold">
              {main?.timer}
              <br /> <span className="text-white">min</span>
            </p>
          </div>
        </div>

        <h3 className="text-xs font-semibold text-left mt-5 p-2 leading-3">
          {main?.description}
        </h3>
      </div>
      {showModal && <Modal />}
    </>
  );
};

export default MainCard;
