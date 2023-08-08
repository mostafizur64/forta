import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import FaqItem from "../FaqItem/FaqItem";
import MonitoringAndProtecting from "../MonitoringAndProtecting/MonitoringAndProtecting";
import Slider from "../Slider/Slider";
import WebEconomy from "../WebEconomy/WebEconomy";
import WorldCommunity from "../WorldCommunity/WorldCommunity";

const Home = () => {
  return (
    <div>
      <Banner />
      <Brand />
      <MonitoringAndProtecting/>
      <Slider/>
      <WebEconomy/>
      <FaqItem/>
      <WorldCommunity/>
    </div>
  );
};

export default Home;
