import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import banner from "../../../Resources/Images/bannerMain.jpg";
import bannerXs from "../../../Resources/Images/bannerMobile3.jpg";

import { useNavigate } from "react-router-dom";

const BannerMUI = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    color: "black",
    backgroundColor: "info.main",
    marginTop: { xs: 4, lg: 3 },
    paddingTop: { xs: "4px", lg: "10px" },
    paddingBottom: { xs: "5px", lg: "10px" },
    paddingLeft: { xs: 1, lg: 5 },
    paddingRight: { xs: 1, lg: 5 },
    "&:hover": {
      color: "white",
      backgroundColor: "secondary.main",
      transitionDuration: ".5s",
    },
    transitionDuration: ".5s",
    boxShadow:
      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;",
  };

  return (
    <Box
      sx={{
        backgroundImage: { xs: `url(${bannerXs})`, lg: `url(${banner})` },
        backgroundSize: "cover",
        height: { xs: "40vh", md: "90vh" },
        backgroundRepeat: "no-repeat",
        backgroundPosition: { xs: "left", md: "top" },
      }}
    >
      <Grid
        container
        sx={{
          height: "100%",
          display: "grid",
          justifyContent: { xs: "flex-start ", lg: "center" },
          alignItems: { xs: "flex-start ", lg: "center" },
        }}
      >
        <Grid sm={6} sx={{ px: { md: 16, xs: 4 } }}>
          <Typography
            variant="overline"
            sx={{
              fontSize: { xs: 15, lg: 19 },
              color: { xs: "#c51162", lg: "#6a1b9a" },
            }}
          >
            Go with confidence
          </Typography>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ color: "info.main", fontSize: { xs: 23, lg: 46 } }}
          >
            Feel better in your skin
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              color: { xs: "black", sm: "black" },
              width: { xs: "65%", lg: "100%" },
              fontSize: { xs: 12, lg: 22 },
            }}
          >
            Introducing new concentrated hyaluron filler, ideal for all non
            invasive skin interventions. Click to read more about our offers and
            services.
          </Typography>
          <Button
            variant="outlined"
            sx={buttonStyle}
            onClick={() => navigate("/shop")}
          >
            Discover More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BannerMUI;
