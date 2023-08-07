import Container from "../../../components/Container/Container";
import BannerImg from "../../../assets/images/bannerImg/quality 1.png";
import VideoButton from "./VideoButton";

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
          <div className="lg:mt-[-376px]"><VideoButton/></div>
          <div className="lg:ml-0 lg:text-right lg:mt-[-498px]">right site</div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
