import React from "react";
import AvailService from "../AvailService/AvailService";
import Footer from "../Shared/Footer/Footer";
import Banner from "./Banner/Banner";
import Description from "./Description/Description";
import "./Home.css";
import Services from "./Services/Services";
import BannerMUI from "./BannerMUI/BannerMUI";

const Home = () => {
  return (
    <div>
      <BannerMUI></BannerMUI>
      <Services />
      <Description></Description>
    </div>
  );
};

export default Home;
