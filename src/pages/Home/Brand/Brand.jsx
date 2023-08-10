import React from "react";
import brand1 from "../../../assets/images/brandImg/scb 1.png";
import brand2 from "../../../assets/images/brandImg/standard-crypto 1.png";
import brand3 from "../../../assets/images/brandImg/northzone 1.png";
import brand4 from "../../../assets/images/brandImg/alchemy 1.png";
import brand5 from "../../../assets/images/brandImg/logo_instadapp 1.png";


const Brand = () => {
  return (
    <div className="px-[65px]">
      <div
        className="grid grid-cols-1 lg:grid-cols-5 lg:gap-[87px] lg:mt-[153px] mt-24 w-full brand-container"
      >
        <img src={brand1} className="brand-image" alt="brand1" />
        <img src={brand2} className="brand-image" alt="brand2" />
        <img src={brand3} className="brand-image" alt="brand3" />
        <img src={brand4} className="brand-image" alt="brand4" />
        <img src={brand5} className="brand-image" alt="brand5" />
      </div>
    </div>
  );
};

export default Brand;
