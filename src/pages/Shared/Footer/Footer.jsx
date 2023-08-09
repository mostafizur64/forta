import Container from "../../../components/Container/Container";
import logo from "../../../assets/images/logo/forta_logo.png";
import img from "../../../assets/images/bannerImg/quality 1.png";
import linebar from "../../../assets/images/footer/Line 2.png";
import bgimg from "../../../assets/images/footer/Forta.png";
import {
  FaSquareTwitter,
  FaLocationArrow,
  FaGithubAlt,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <Container>
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-[70px] justify-between items-center mt-[307px] text-white footer-shadow">
      <img className="absolute w-full mt-[106px] px-[50px] bg-no-repeat bg-cover bg-center" src={bgimg} alt="logo" />
        <div className="">
          <img className="w-[154px] h-[34px]" src={logo} alt="logo" />
          <p className="mt-[30px] mb-[40px]">©2023 – All Rights Reserved</p>
          <h3>Follow Us</h3>
          <ul className="flex gap-[25px] mt-[24px]">
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
        <div className="z-50">
          <img className="w-[582px] h-[548px] " src={img} alt="middleimg" />
        </div>
        <div className="w-[395px] lg:ml-[40px]">
          <h2 className="text-[40px]">Stay updated on the latest Forta news</h2>
          <p className="mt-[24px] mb-[36px]">
            Add your email below to keep up withthe latest announcements
          </p>
          <div className="relative">
            <input
              className="absolute text-white bg-[#1f1f3846] lg:w-[389px] w-[250px] opacity-[1]"
              type="text"
              placeholder="Email Address"
            />
            <FaArrowRight className="absolute w-[18px] h-[18px] lg:right-[10px] right-[170px] top-1 " />
            <img
              src={linebar}
              alt=""
              className="absolute mt-8 lg:w-[389px]  w-[250px] "
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap- lg:gap-[292px] justify-between items-center text-[20px] text-[#fff] mt-[105px]">
        <a href="#">Subscribe</a>
        <a href="#">Build</a>
        <a href="#" className="w-[120px]">
          Case Studies
        </a>
        <a href="#">Stake</a>
        <a href="#">Blog</a>
      </div>
    </Container>
  );
};

export default Footer;
