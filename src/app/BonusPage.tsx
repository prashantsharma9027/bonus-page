"use client";
import React, { useState } from "react";
import Image from "next/image";
import bonusIcon from "./assets/bonusIcon.png";
import bonusFrame from "./assets/BonusFrame.png";

const BonusPage = () => {
  const initialWins = [100, 200, 300, 400, 500, 600];
  const [wins, setWins] = useState(initialWins);
  const [clicked, setClicked] = useState(Array(6).fill(false));

  const handleClick = (index: number) => {
    if (!clicked[index] && wins.length > 0) {
      const randomIndex = Math.floor(Math.random() * wins.length);
      const newClicked = [...clicked];
      newClicked[index] = wins[randomIndex];
      setClicked(newClicked);
      setWins(wins.filter((_, i) => i !== randomIndex));
    }
  };

  const handleReset = () => {
    setWins(initialWins);
    setClicked(Array(6).fill(false));
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 flex flex-col">
      <div className="relative w-[90vw] h-[50.625vw] sm:w-[75vw] sm:h-[42.1875vw] max-w-[1440px] max-h-[810px] mx-auto">
        <Image
          src={bonusFrame}
          alt="Bonus Frame"
          fill
          style={{ objectFit: "contain" }}
          priority
          className="z-0"
        />
        <div className="absolute inset-[12%] grid grid-cols-3 ">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="relative flex justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => handleClick(index)}
              >
                <div className="relative w-[85%] xs:w-[90%] aspect-square">
                  <Image
                    src={bonusIcon}
                    alt="Bonus Icon"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                    className="z-10"
                  />
                  {clicked[index] && (
                    <span className="absolute top-[48%] inset-x-0 z-20 flex justify-center items-center text-white text-xs sm:text-sm md:text-2xl lg:text-4xl xl:text-4xl font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                      {clicked[index]}
                    </span>
                  )}
                </div>
              </div>
            ))}
        </div>
        
      </div>
      <button
        onClick={handleReset}
        className="px-6 py-2 bg-[#740001] text-[#FFE100] font-bold rounded-lg hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
      >
        Reset Game
      </button>
    </div>
  );
};

export default BonusPage;
