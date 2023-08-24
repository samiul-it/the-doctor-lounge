import React from "react";
import AvailService from "../AvailService/AvailService";
import Footer from "../Shared/Footer/Footer";
import Description from "./Description/Description";
import "./Home.css";
import Services from "./Services/Services";
import BannerMUI from "./BannerMUI/BannerMUI";
import { Box, Grid } from "@mui/material";
import StyledDescription from "./StyledDescription/StyledDescription";
import DoctorBanner from "./DoctorBanner/DoctorBanner";
import OurDoctors from "./OurDoctors/OurDoctors";
import IconedDescription from "./IconedDescription/IconedDescription";
import MedicareUpdate from "./MedicareUpdate/MedicareUpdate";
import PatientTestimonial from "./PatientTestimonial/PatientTestimonial";
import Subscribe from "./Subscribe/Subscribe";
import SlidingBanner from "./SlidingBanner/SlidingBanner";

const Home = () => {
  return (
    <div>
      <BannerMUI></BannerMUI>
      {/* <SlidingBanner></SlidingBanner> */}

      <StyledDescription></StyledDescription>
      <DoctorBanner></DoctorBanner>
      <OurDoctors></OurDoctors>
      <IconedDescription></IconedDescription>
      <MedicareUpdate></MedicareUpdate>
      <PatientTestimonial></PatientTestimonial>
      <Subscribe></Subscribe>

      {/* <Grid container justifyContent="center">
        <Box sx={{ display: "flex", pt: 2 }}>
          <h3 style={{ color: "#00adb5" }}>Our Services </h3>
        </Box>
      </Grid> */}

      {/* <Services /> */}
    </div>
  );
};

export default Home;
