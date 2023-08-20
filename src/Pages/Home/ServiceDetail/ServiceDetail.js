import React from "react";
import useServiceDetail from "../../../hooks/useServiceDetail";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Services from "../../Home/Services/Services";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ServiceDetail = () => {
  const { service_id } = useParams();
  const navigate = useNavigate();

  const [serviceDetail, serviceDetailLoading] = useServiceDetail(service_id);
  const { serviceName, _id, description, img, fees } = serviceDetail;

  const navigateToAvailService = (service_id) => {
    navigate(`/services/${service_id}`);
  };
  if (serviceDetailLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  // Rating

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: 360, lg: 699 },
            bgcolor: "background.paper",
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
            <Stack direction="row" spacing={1}>
              <Chip label="Extra Soft" />
              <Chip color="primary" label="Soft" />
              <Chip label="Medium" />
              <Chip label="Hard" />
            </Stack>
          </Box>
          <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
            <Button
              onClick={() => navigateToAvailService(_id)}
              variant="contained"
              fullWidth
            >
              Book Now
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ServiceDetail;
