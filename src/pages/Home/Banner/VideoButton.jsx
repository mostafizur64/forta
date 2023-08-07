import React from 'react';

const VideoButton = () => {
  return (
    <div className="relative w-[315px] h-[105px]">
      {/* First background image */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover op"
        style={{
          backgroundImage: `url('https://i.ibb.co/614DFX1/Rectangle-402.png')`,
        }}
      > 
      </div>

      {/* Second background image */}
      <div
            className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover p-10"
        style={{
          backgroundImage: `url('https://i.ibb.co/s6Rzkdj/Rectangle-405.png')`,
          padding:'10px',
        }}
      ></div>

      {/* Button label */}
      <button
        className="absolute inset-0 w-full h-full flex justify-center items-center text-white font-semibold bg-transparent border-none cursor-pointer"
      >
        
        Start button
      </button>
    </div>
  );
};

export default VideoButton;
