import React from "react";
import useServices from "./../../../hooks/useServices";
import Service from "../Service/Service";
import "./Services.css";
import { Link } from "react-router-dom";
import { Box, CircularProgress, Grid, Skeleton, Stack } from "@mui/material";

const Services = ({ hideDescription }) => {
  const [services, setServices, serviceLoading] = useServices();
  // console.log(services);

  if (serviceLoading) {
    return (
      <Grid container justifyContent="center">
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </Grid>
    );
  }

  // console.log(services);

  return (
    <div>
      <div className="services-card-container">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            hideDescription={!hideDescription}
          ></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
