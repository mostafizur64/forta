import React from "react";

const VideoButton = () => {
  return (
    <div className="videobutton relative w-full h-full mx-auto">
      <div className="absolute lg:w-[464px] w-[405px] h-[126px] lg:-mt-[75px] -mt-[66px] lg:ml-[-75px] ml-[6px] ">
        <img
          src="https://i.ibb.co/614DFX1/Rectangle-402.png"
          alt=""
        />
      </div>
      <div className=" absolute lg:w-[315px] h-[105px] ">
        <img src="https://i.ibb.co/s6Rzkdj/Rectangle-405.png" alt="" />
      </div>
     
      {/* First background image */}
      {/* <div
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover op"
        style={{
          backgroundImage: `url('https://i.ibb.co/614DFX1/Rectangle-402.png')`,
        }}
      > 
      </div> */}

      {/* Second background image */}
      {/* <div
            className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover p-10"
        style={{
          backgroundImage: `url('https://i.ibb.co/s6Rzkdj/Rectangle-405.png')`,
          padding:'10px',
        }}
      ></div> */}

      {/* Button label */}
      {/* <button
        className="absolute inset-0 w-full h-full flex justify-center items-center text-white font-semibold bg-transparent border-none cursor-pointer"
      >
        
        Start button
      </button> */}
    </div>
  );
};

export default VideoButton;
