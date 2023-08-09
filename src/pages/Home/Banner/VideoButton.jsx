import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

const VideoButton = () => {
  return (
    <div className="videobutton ">
      <div className="relative lg:w-[464px] w-[100%] lg:h-[126px] h-auto cursor-pointer">
        <img
          className="absolute top-0 left-0 w-full"
          src="https://i.ibb.co/614DFX1/Rectangle-402.png"
          alt=""
        />
        <img
          className="absolute lg:top-[75px] lg:left-[75px] lg:z-1 z lg:w-[315px] h-[105px] w-[270px] top-[62px] left-[75px]"
          src="https://i.ibb.co/s6Rzkdj/Rectangle-405.png"
          alt=""
        />
        <div className="absolute lg:top-[95px] lg:left-28 top-20 left-20 flex justify-center items-center gap-8 cursor-pointer">
          <div className="text-2xl border border-white rounded-full"><FaCirclePlay size={60} className="p-2"/></div>
          <div className="w-full text-2xl">start play video</div>
        </div>
      </div>
    </div>
  );
};

export default VideoButton;
