
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

const ResponsiveButton = ({image1, image2 }) => {
  return (
    <button className="relative overflow-hidden w-[396px] h-[126px]">
      <div className="relative w-full h-full">
        <img
          src={image1}
          alt="Background 1"
          className="w-[396px] h-[126px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={image2}
            alt="Background 2"
            className="w-2/3 h-2/3 object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-lg flex justify-center items-center gap-4">
          <div className="">
            <FaCirclePlay size={60} className="p-2 border border-white rounded-full" />
          </div>
          <div className="">Play Demo Video</div>
        </div>
      </div>
    </button>
  );
};

export const VideoButton = () => {
  const image1 = "https://i.ibb.co/614DFX1/Rectangle-402.png"; // Replace with your image paths
  const image2 = "https://i.ibb.co/s6Rzkdj/Rectangle-405.png"; // Replace with your image paths

  return (
    <div className="flex justify-center items-center">
      <ResponsiveButton title="Click Me" image1={image1} image2={image2} />
    </div>
  );
};

// Render the app
