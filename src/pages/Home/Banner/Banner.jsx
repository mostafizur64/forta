import Container from "../../../components/Container/Container";
import BannerImg from "../../../assets/images/bannerImg/quality 1.png";
import VideoButton from "./VideoButton";
import { FaArrowUp, FaGithub, FaGithubAlt, FaLocationArrow, FaSquareTwitter } from "react-icons/fa6";
import img from '../../../assets/images/logo/Forta.png'
const Banner = () => {
  return (
    // grid grid-cols-1 lg:grid-cols-2 gap-12
    <Container>
      <div className="banner relative">
        <img className="w-full h-full mt-12 ml-48" src={img} alt="logo" />
        <div className="absolute top-0 grid lg:grid-cols-2 grid-cols-1 items-center mt-[100px]">
          <p className="lg:w-[1073px] w-full z-20 text-white text-[25px] lg:text-[75px] capitalize ">
            Detect Web3 Threats and Anomalies in Real-Time with Machine Learning
          </p>
          <div className="absolute lg:left-[30%] w-full z-10 -lg:top-10 -top-48  ">
            <img
              className="lg:w-[769px] h-full w-[400px] "
              src={BannerImg}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 text-white justify-between items-center mt-64">
          <div className="lg:mt-[-376px]"><VideoButton /></div>
          <div className="lg:ml-0 flex lg:justify-end justify-center lg:mt-[-498px] mt-36  z-50">
          <ul className="flex lg:flex-col gap-[25px] mt-[24px]">
            <li className="w-[49px] h-[49px] border border-white rounded-full flex items-center justify-center">
              <FaSquareTwitter className="w-[24px] h-[24px]" />
            </li>
            <li className="w-[49px] h-[49px] border border-white rounded-full flex items-center justify-center">
              <FaLocationArrow className="w-[24px] h-[24px]" />
            </li>
            <li className="w-[49px] h-[49px] border border-white rounded-full flex items-center justify-center">
              <FaGithubAlt className="w-[24px] h-[24px]" />
            </li>
            <li className="w-[49px] h-[49px] border border-white rounded-full flex items-center justify-center">
              <FaGithub className="w-[24px] h-[24px]" />
            </li>
          </ul>
          </div>
        </div>
      </div>
{/*       
      <img
        className="background-image -mt-[704px] -ml-[197px]"
        src="https://i.ibb.co/2ht5Fvx/quality-3.png"
        alt=""
      /> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-4 lg:gap-[274px] mt-[221px] text-[#fff]">
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
