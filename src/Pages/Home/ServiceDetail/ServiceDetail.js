import React from "react";
import useServiceDetail from "../../../hooks/useServiceDetail";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

const ServiceDetail = () => {
  const { service_id } = useParams();

  const [serviceDetail] = useServiceDetail(service_id);
  const { serviceName, _id, description, img, fees } = serviceDetail;

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: 360, lg: 699 },
          bgcolor: "background.paper",
          ml: { xs: 0, lg: 55 },
        }}
      >
        <Box sx={{ my: 3, mx: 2 }}>
          <Grid container alignItems="center">
            <Grid item>
              <CardMedia
                component="img"
                image={img}
                alt="service-thumb"
                sx={{
                  width: "100%",
                  maxWidth: { xs: 360, lg: 699 },
                }}
              />
            </Grid>
            <Grid item xs>
              <Typography
                variant="overline"
                sx={{
                  fontSize: { xs: 15, lg: 19 },
                  color: { xs: "#ef6c00", lg: "#ef6c00" },
                }}
              >
                {serviceName}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h6" component="div">
                ৳‎{fees}
              </Typography>
            </Grid>
          </Grid>
          <Typography color="text.secondary" variant="body2">
            {description}
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box sx={{ m: 2 }}>
          <Typography gutterBottom variant="body1">
            Patient Feedback
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip label="Extra Soft" />
            <Chip color="primary" label="Soft" />
            <Chip label="Medium" />
            <Chip label="Hard" />
          </Stack>
        </Box>
        <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
          <Button>Add to cart</Button>
        </Box>
      </Box>
    </div>
  );
};

export default ServiceDetail;
