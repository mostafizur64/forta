import Container from "../../../components/Container/Container";
import Img from "../../../assets/images/WebEconomyImg/material_3-p-800 1.png";
import { FaArrowUp } from "react-icons/fa6";

const WebEconomy = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 justify-between items-center lg:gap-[10px] color-effect lg:mt-2 mt-24">
        <div>
          <img className="w-full" src={Img} alt="" />
        </div>
        <div className="lg:w-[1434px] lg:text-right lg:-ml-[666px]">
          <h1 className="text-[60px] web-title lg:mt-28">
            As the Web3 economy grows in value and complexity, security has
            become increasingly critical. More than $1 billion was lost in the
            first quarter of 2022 due to hacks and exploits, some of which have
            only been discovered several days after the attack happened.
          </h1>
          <button className="justify-end web-btn inline text-[#F5F5F5] mt-[92px] lg:w-[296px] w-full hover:scale-105 duration-1000">
            learn More
            <FaArrowUp
              className="ml-2 inline rotate-45"
              width="41px"
              height="41px"
            />
          </button>
        </div>
      </div>
      
    </Container>
  );
};

export default WebEconomy;
