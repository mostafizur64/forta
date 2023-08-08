import lineBar from "../../../assets/images/MonitoringAndProtectingImg/Vector 265.png";
import Container from "../../../components/Container/Container";
import img1 from '../../../assets/images/comunnityColImg/image 44.png'
import img2 from '../../../assets/images/comunnityColImg/image 45.png'
import img3 from '../../../assets/images/comunnityColImg/image 48.png'
import img4 from '../../../assets/images/comunnityColImg/image 49.png'
import img5 from '../../../assets/images/comunnityColImg/image 52.png'
import img6 from '../../../assets/images/comunnityColImg/image 55.png'
import img7 from '../../../assets/images/comunnityColImg/image 56.png'
import img8 from '../../../assets/images/comunnityColImg/image 57.png'
import img9 from '../../../assets/images/comunnityColImg/image 58.png'

const WorldCommunity = () => {
  return (
    <>
      <div className="lg:px-[227px] px-12 lg:mt-[221px] mt-12 lg:ml-16"> 
        <h1
          className="
            lg:text-[60px] text-[40px] text-[#F2F2F2] capitalize"
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
        {/* <div
          className="grid grid-cols-1 lg:grid-cols-4 text-center"
        //   style={{
        //     borderRadius: "19px 0px 0px 0px",
        //     background:
        //       "linear-gradient(168deg, rgba(44, 42, 64, 0.80) 0%, rgba(17, 17, 28, 0.80) 49.08%, rgba(14, 15, 22, 0.80) 100%)",
        //   }}
        >
          <div className="bg-green-200  shadow-2xl ">div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores repudiandae numquam earum voluptate quam rerum cumque similique qui voluptates? Cum!</div>
          <div className="bg-green-200  shadow-lg ">div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores repudiandae numquam earum voluptate quam rerum cumque similique qui voluptates? Cum!</div>
          <div className="bg-green-200  shadow-lg ">div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores repudiandae numquam earum voluptate quam rerum cumque similique qui voluptates? Cum!</div>
          <div className="bg-green-200  shadow-lg ">div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores repudiandae numquam earum voluptate quam rerum cumque similique qui voluptates? Cum!</div>
          <div className="bg-green-200  shadow-lg ">div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores repudiandae numquam earum voluptate quam rerum cumque similique qui voluptates? Cum!</div>
          <div className="bg-green-200  shadow-lg ">div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores repudiandae numquam earum voluptate quam rerum cumque similique qui voluptates? Cum!</div>
          <div className="bg-green-200  shadow-lg ">div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores repudiandae numquam earum voluptate quam rerum cumque similique qui voluptates? Cum!</div>
          <div className="bg-green-200  shadow-lg ">div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores repudiandae numquam earum voluptate quam rerum cumque similique qui voluptates? Cum!</div>
          <div className="bg-green-200  shadow-lg ">div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores repudiandae numquam earum voluptate quam rerum cumque similique qui voluptates? Cum!</div>
          <div className="bg-green-200  shadow-lg ">div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores repudiandae numquam earum voluptate quam rerum cumque similique qui voluptates? Cum!0</div>
          <div className="bg-green-200  shadow-lg ">div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores repudiandae numquam earum voluptate quam rerum cumque similique qui voluptates? Cum!1</div>
          <div className="bg-green-200  shadow-lg ">div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores repudiandae numquam earum voluptate quam rerum cumque similique qui voluptates? Cum!2</div>
        </div> */}
        <div className="grid lg:grid-cols-4 rounded-full ">
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
    </>
  );
};

export default WorldCommunity;
