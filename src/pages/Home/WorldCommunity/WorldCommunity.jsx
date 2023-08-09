import lineBar from "../../../assets/images/MonitoringAndProtectingImg/Vector 265.png";
import Container from "../../../components/Container/Container";
import img1 from "../../../assets/images/comunnityColImg/image 44.png";
import img2 from "../../../assets/images/comunnityColImg/image 45.png";
import img3 from "../../../assets/images/comunnityColImg/image 48.png";
import img4 from "../../../assets/images/comunnityColImg/image 49.png";
import img5 from "../../../assets/images/comunnityColImg/image 52.png";
import img6 from "../../../assets/images/comunnityColImg/image 55.png";
import img7 from "../../../assets/images/comunnityColImg/image 56.png";
import img8 from "../../../assets/images/comunnityColImg/image 57.png";
import img9 from "../../../assets/images/comunnityColImg/image 58.png";

const WorldCommunity = () => {
  return (
    <>
      <div className="lg:px-[227px] px-12 lg:mt-[221px] mt-12 lg:ml-16 ">
      
        <h1
          className="
            lg:text-[60px] text-[40px] text-[#F2F2F2] capitalize z-50"
          style={{ textShadow: "0px 10px 30px rgba(0, 0, 0, 0.25)" }}
        >
          World-class backers and
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[37px] justify-between items-center mt-[24px]">
     
          <img className="w-[665px]" src={lineBar} alt="" />
          <h1 className="lg:text-[60px] text-[40px] italic text-[#F2F2F2]  capitalize">
            community members
          </h1>
        </div>
      </div>
      <Container>
     
        <div className="grid lg:grid-cols-4 rounded-full  mt-12  relative z-50">
        <div className="slider-shadow "></div>
          <div className="col-custom-color p-2  max-w-[400px] h-[270px] flex justify-center items-center">
            <img src={img2} alt="img1" />
          </div>
          <div className="row-span-2 col-custom-color p-2 max-[378px] max-h-[541px] flex justify-center items-center">
            <img src={img4} alt="" />
          </div>
          <div className="col-custom-color p-2 max-w-[400px] h-[270px] flex justify-center items-center">
            <img src={img8} alt="" />
          </div>
          <div className="col-custom-color p-2 max-w-[400px] h-[270px] flex justify-center items-center">
            <img src={img3} alt="" />
          </div>
          <div className="col-custom-color p-2 max-w-[400px] h-[270px] flex justify-center items-center">
            <img src={img7} alt="" />
          </div>
          <div className="col-span-2 col-custom-color p-2 max-w-[777px] h-[270px] flex justify-center items-center">
            <img src={img5} alt="" />
          </div>
          <div className="col-span-2 col-custom-color p-2 max-w-[777px] h-[270px] flex justify-center items-center">
            <img src={img1} alt="" />
          </div>
          <div className="col-custom-color p-2 max-w-[400px] h-[270px] flex justify-center items-center">
            <img src={img6} alt="" />
          </div>
          <div className="col-custom-color p-2 max-w-[400px] h-[270px] flex justify-center items-center">
            <img src={img9} alt="" />
          </div>
        </div>
      </Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-[230px] gap-[31px] mt-12 relative" style={{color:'rgba(228, 228, 237, 0.95)'}}>
      <div className="max-w-[1105px] h-[90px]">
          <h1 className=" absolute lg:text-[75px] text-[30px] lg:-left-[514px] font-medium text-center	md:text-center ">
            Real-Time with <span className="italic">Machine Learning.</span>
          </h1>
        </div>
        <div className="max-w-[1105px] h-[90px]">
          <h1 className="absolute lg:text-[75px] text-[30px] lg:-ml-[235px] font-medium text-center	md:text-center ">Real-Time with <span className="italic">Machine Learning.</span></h1>
        </div>
      </div>
    </>
  );
};

export default WorldCommunity;
