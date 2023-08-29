import React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  CardMedia,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
const Subscribe = () => {
  return (
    <Stack
      sx={{
        marginTop: { xs: 0, lg: 0 },
        marginLeft: { xs: 0, lg: 0 },
        backgroundColor: "#e7ebee",
      }}
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1500"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: { xs: 450, lg: 500 },
          width: { xs: "100%", lg: "50%" },
        }}
      >
        <Grid item sx={{ marginLeft: { xs: 5, lg: 10 } }}>
          <Typography
            color="#ff6d00"
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontFamily: "Helvetica",
            }}
          >
            GET THE NOTIFICATION
          </Typography>
          <Divider
            gutterBottom
            sx={{
              width: 120,
            }}
            style={{
              border: "none",
              height: 6,
              margin: 2,
              color: "#00796b",
            }}
          />
          <Typography
            color="#dd2c00"
            gutterBottom
            component="div"
            sx={{
              fontFamily: "Bookman",
              fontWeight: "bold",
              fontSize: {
                lg: 55,
                xs: 40,
              },
            }}
          >
            We have some Good news
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 14, lg: 18 }, marginBottom: 5 }}
            variant="body2"
          >
            Sign up for Medicare newsletter to receive all the new offers and
            discounts from Medicare clinic. Discounts are only valid four our
            newsletter subscribers.
          </Typography>
          <TextField
            label="Enter your email"
            InputProps={{
              style: {
                height: { xs: 45, lg: 54 },
                width: { xs: 180, lg: 300 },
                borderRadius: 30,
                backgroundColor: "#b4b8ba",
              },
            }}
          />
          <Button
            sx={{
              borderRadius: 30,
              height: { xs: 54, lg: 54 },
              width: { xs: 100, lg: 100 },
              fontSize: 16,
              backgroundColor: "#dd2c00",
              marginLeft: { xs: 1, lg: 2 },
            }}
            component={Link}
            to="/login"
            variant="contained"
            size="large"
            color="secondary"
          >
            Email
          </Button>
        </Grid>
      </Box>
      <Box
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1500"
        sx={{
          height: { xs: 350, lg: 500 },
          width: { xs: "100%", lg: "50%" },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: { xs: 300, lg: 650 },
            marginTop: { xs: 0, lg: 0 },
            margin: "auto",
          }}
          image="https://aquinahealth.com/wp-content/uploads/2018/09/Pulse_91918.jpeg"
          alt="Live from space album cover"
        />
      </Box>
    </Stack>
  );
};

export default Subscribe;
