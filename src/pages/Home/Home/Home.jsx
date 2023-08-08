import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import FaqItem from "../FaqItem/FaqItem";
import MonitoringAndProtecting from "../MonitoringAndProtecting/MonitoringAndProtecting";
import Slider from "../Slider/Slider";
import WebEconomy from "../WebEconomy/WebEconomy";

const Home = () => {
  return (
    <div>
      <Banner />
      <Brand />
      <MonitoringAndProtecting/>
      <Slider/>
      <WebEconomy/>
      <FaqItem/>
    </div>
  );
};

export default Home;
