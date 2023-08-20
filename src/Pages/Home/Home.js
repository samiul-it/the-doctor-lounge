import React from "react";
import AvailService from "../AvailService/AvailService";
import Footer from "../Shared/Footer/Footer";
import Banner from "./Banner/Banner";
import Description from "./Description/Description";
import "./Home.css";
import Services from "./Services/Services";
import BannerMUI from "./BannerMUI/BannerMUI";
import { Box, Grid } from "@mui/material";

const Home = () => {
  return (
    <div>
      <BannerMUI></BannerMUI>

      <Grid container justifyContent="center">
        <Box sx={{ display: "flex", pt: 2 }}>
          <h3 style={{ color: "#00adb5" }}>Our Services </h3>
        </Box>
      </Grid>
      <Services />
      {/* <Description></Description> */}
    </div>
  );
};

export default Home;
