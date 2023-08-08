import lineBar from "../../../assets/images/MonitoringAndProtectingImg/Vector 265.png";
const MonitoringAndProtecting = () => {
  return (
    <div className="lg:px-[227px] px-12 lg:mt-[190px] mt-12 ">
      <h1
        className="
            lg:text-[60px] text-[40px] text-[#F2F2F2] capitalize"
        style={{ textShadow: "0px 10px 30px rgba(0, 0, 0, 0.25)" }}
      >
        Monitoring and protecting
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[37px] justify-between items-center mt-[24px]">
        <img className="w-[665px]" src={lineBar} alt="" />
        <h1 className="text-[60px] italic text-[#F2F2F2]  capitalize">all assets in Web3</h1>
      </div>
    </div>
  );
};

export default MonitoringAndProtecting;
