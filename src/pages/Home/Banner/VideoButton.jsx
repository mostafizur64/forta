import React from "react";

const VideoButton = () => {
  return (
    <div className="videobutton ">
      <div className="relative lg:w-[464px] w-[100%] lg:h-[126px] h-auto">
        <img
          className="absolute top-0 left-0 w-full"
          src="https://i.ibb.co/614DFX1/Rectangle-402.png"
          alt=""
        />

        <img
          className="absolute top-0 left-0 lg:top-[75px] lg:left-[75px] z-1 lg:w-[315px] h-[105px] w-full"
          src="https://i.ibb.co/s6Rzkdj/Rectangle-405.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default VideoButton;
