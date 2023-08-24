import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";

const SlidingBanner = () => {
  return (
    <Box>
      <Carousel showStatus={false} showThumbs={false} autoPlay={true}>
        <div>
          <img src="https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/d/1/3-hospitalist_patient-story.jpg__992x558_q85_crop-smart_subsampling-2_upscale.jpg?itok=HL_cR-BT" />
        </div>
        <div>
          <img src="https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/d/1/3-hospitalist_patient-story.jpg__992x558_q85_crop-smart_subsampling-2_upscale.jpg?itok=HL_cR-BT" />
        </div>
        <div>
          <img src="https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/d/1/3-hospitalist_patient-story.jpg__992x558_q85_crop-smart_subsampling-2_upscale.jpg?itok=HL_cR-BT" />
        </div>
      </Carousel>
    </Box>
  );
};

export default SlidingBanner;
