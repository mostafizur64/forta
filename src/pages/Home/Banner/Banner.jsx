import Container from "../../../components/Container/Container";
import BannerImg from "../../../assets/images/bannerImg/quality 1.png";
import VideoButton from "./VideoButton";
import { FaArrowUp } from "react-icons/fa6";
const Banner = () => {
  return (
    <Container>
      <div className="banner lg:max-w-[1416px] lg:ml-[320px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <p className="absolute left-0 lg:left-[170px] lg:w-[1073px] lg:top-[320px]  text-white text-[25px] lg:text-[75px] capitalize px-4">
            Detect Web3 Threats and Anomalies in Real-Time with Machine Learning
          </p>
          <div>
            <img
              className="w-[769px] h-[769px] lg:ml-[270px] ml-0 lg:mt-0 mt-56"
              src={BannerImg}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 text-white justify-between items-center ">
          <div className="lg:mt-[-376px]">{/* <VideoButton /> */}</div>
          <div className="lg:ml-0 lg:text-right lg:mt-[-498px]">right site</div>
        </div>
      </div>
      {/* 
      <img
        className="background-image -mt-[704px] -ml-[197px]"
        src="https://i.ibb.co/2ht5Fvx/quality-3.png"
        alt=""
      /> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-4 lg:gap-[274px]  text-[#fff]">
        <div>
          <h2 className="text-[22px]">Total Value Monitored</h2>
          <h1 className="text-[45px]">$44,013,398,915 </h1>
        </div>
        <div className="bg-[#7154E5] rounded-full w-full lg:w-[169px] h-[169px] flex flex-col justify-center items-center ml-">
          <div className="text-center">
            <p>Start Building</p>
            <FaArrowUp
              className="mt-4 ml-8 rotate-45"
              width="41px"
              height="41px"
            />
          </div>
        </div>

        <div>
          <h2 className="text-[24px] w-[456px]">
            The leading decentralized security & operational monitoring network
            for wallets, developers, and investors
          </h2>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
