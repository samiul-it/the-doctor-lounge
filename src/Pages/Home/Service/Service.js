import * as React from "react";
import "./Service.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Backdrop,
  Badge,
  Box,
  Button,
  CardActionArea,
  CardActions,
  Chip,
  CircularProgress,
  Divider,
  Stack,
} from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import Loading from "../../Loading/Loading";

const Service = ({ service, hideDescription }) => {
  const { _id, serviceName, img, description, fees } = service;
  const [user, loading] = useAuthState(auth);
  const [showMore, setShowMore] = React.useState(false);
  const navigate = useNavigate();

  const navigateToAvailService = (service_id) => {
    navigate(`/services/${service_id}`);
  };

  const navigateToServiceDetail = (_id) => {
    navigate(`/services/service-detail/${_id}`);
  };

  if (loading) {
    return <Loading></Loading>;
  }

  // Show More

  // Rating Colour

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
      <Card sx={({ maxWidth: 345 }, { m: 3 })}>
        <CardActionArea
          onClick={() => {
            navigateToServiceDetail(_id);
          }}
        >
          <CardMedia
            component="img"
            height="180"
            image={img}
            alt="service-thumb"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {serviceName}
            </Typography>
            {hideDescription ? (
              <Typography variant="body2" color="text.secondary">
                {showMore ? description : `${description?.substring(0, 250)}`}

                <button style={{ color: "#ff3d47" }} className="btn">
                  See Details
                </button>

                {/* {description} */}
              </Typography>
            ) : (
              <></>
            )}
            <Typography
              gutterBottom
              variant="h6"
              sx={{ fontWeight: 600 }}
              component="div"
            >
              ${fees}
            </Typography>
            <Divider variant="middle" />
            <Box sx={{ m: 1 }}>
              <Stack direction="row" spacing={1}>
                <Chip label="Extra Soft" />
                <Chip color="primary" label="Soft" />
                <Chip label="Medium" />
                <Chip label="Hard" />
              </Stack>
            </Box>
            <Stack direction="row" spacing={1}>
              <StyledRating
                readOnly
                name="customized-color"
                defaultValue={4.5}
                getLabelText={(value) =>
                  `${value} Heart${value !== 1 ? "s" : ""}`
                }
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              />
            </Stack>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button
            style={{
              // borderRadius: 25,
              backgroundColor: "#e30ba9",
              padding: "5px 10px",
              fontSize: "16px",
            }}
            fullWidth
            onClick={() => navigateToAvailService(_id)}
            variant="contained"
          >
            Take Appoinment
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Service;
