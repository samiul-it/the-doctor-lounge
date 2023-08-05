import * as React from "react";
import "./Service.css";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Backdrop,
  Button,
  CardActionArea,
  CardActions,
  CircularProgress,
} from "@mui/material";

const Service = ({ service }) => {
  const { _id, serviceName, img, description, fees } = service;
  const navigate = useNavigate();

  // MUI BackDrop

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const navigateToAvailService = (serviceName) => {
    navigate(`/services/${serviceName}`);
  };

  const navigateToServiceDetail = (_id) => {
    navigate(`/services/service-detail/${_id}`);
  };
  return (
    <div>
      {/* Old Ui  */}
      {/* <div className="service-container">
        <div className="service-img">
          <img src={img} alt="service-img" />
        </div>
        <div className="service-description">
          <h3>{serviceName}</h3>
          <p>
            <small>{description}</small>
          </p>
          <h4>${fees}</h4>

          <button
            onClick={() => navigateToAvailService(serviceName)}
            className="btn btn-danger"
          >
            Avail this Service
          </button>
        </div>
      </div> */}

      <Button onClick={handleOpen}>Show backdrop</Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Card sx={({ maxWidth: 345 }, { m: 3 })}>
        <CardActionArea
          onClick={() => {
            navigateToServiceDetail(_id);
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="service-thumb"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {serviceName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ fontWeight: 600 }}
              component="div"
            >
              ${fees}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => navigateToAvailService(serviceName)}
            variant="contained"
          >
            Avail this Service
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Service;
