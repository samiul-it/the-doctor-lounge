import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import SpaIcon from "@mui/icons-material/Spa";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { styled } from "@mui/material/styles";

const PatientTestimonial = () => {
  const patientReviewTestimonial = [
    {
      reviewerName: "A BETTER LIFE",
      profilePicture:
        "https://i.pinimg.com/736x/b7/3a/ad/b73aad5860c6933bb3e48fcb05ee4eb6.jpg",

      review:
        "Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes.",
      cardColor: "#de1d3c",
    },
    {
      reviewerName: "GETTING A NEW CHANCE",
      profilePicture:
        "https://t3.ftcdn.net/jpg/05/50/81/42/360_F_550814299_jvkV89ljy7DPEAT5Bmbr1ByXcauKOSey.jpg",

      review:
        "Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverable applications.",
      cardColor: "#d51030",
    },
    {
      reviewerName: "SAVING LIVES",
      profilePicture:
        "https://img.freepik.com/free-photo/businesswoman-eyeglasses-posing-white_176420-39877.jpg",

      review:
        "Continually reintermediate integrated processes through technically sound intellectual capital. Holistically foster superior methodologies.",
      cardColor: "#c60c2a",
    },
  ];

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        backgroundColor: "#ff1744",
        marginTop: { xs: 5, lg: 5 },
        marginBottom: 0,
      }}
    >
      <Button
        sx={{
          borderRadius: 28,
          height: { xs: 45, lg: 45 },
          width: { xs: 210, lg: 210 },
          fontSize: 16,
          backgroundColor: "#212121",
          margin: "auto",
          marginTop: -3,
        }}
        component={Link}
        to="/login"
        variant="contained"
        size="large"
        color="secondary"
      >
        View All Services
      </Button>
      <Typography
        gutterBottom
        variant="h6"
        color="#e0f2f1"
        component="div"
        sx={{
          fontFamily: "Helvetica",
          textAlign: "center",
          marginTop: 5,
        }}
      >
        A GOOD WORD MEANS A LOT
      </Typography>

      <Typography
        data-aos="zoom-in"
        data-aos-duration="1500"
        color="#e0f2f1"
        gutterBottom
        component="div"
        sx={{
          fontFamily: "sans-serif",
          fontWeight: "bold",
          fontSize: {
            lg: 70,
            xs: 35,
          },
          textAlign: "center",
        }}
      >
        Patient testimonials
      </Typography>
      <Typography
        variant="h6"
        color="#e0f2f1"
        component="div"
        sx={{
          fontFamily: "Helvetica",
          textAlign: "center",
          marginBottom: { xs: 3, lg: 8 },
        }}
      >
        It’s always the word of mouth that’s the best advice. Here are some of
        our…
      </Typography>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            spacing={{ xs: " 80", lg: "100" }}
          >
            {patientReviewTestimonial.map((cardDescription, index) => (
              <Grid key={index} item>
                <Card
                  sx={{
                    borderRadius: 0,
                    maxWidth: { xs: 280, lg: 330 },
                    boxShadow: 0,
                    backgroundColor: "#ff1744",
                  }}
                >
                  <CardContent
                    sx={{
                      height: { xs: 350, lg: 400 },
                      textAlign: "center",
                    }}
                  >
                    <Badge
                      data-aos="fade-left"
                      data-aos-anchor="#example-anchor"
                      data-aos-offset="500"
                      data-aos-duration="1600"
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      badgeContent={
                        <FormatQuoteIcon
                          sx={{
                            width: 80,
                            height: 80,
                            "&:hover": {
                              color: "#f9fbe7",
                              opacity: [0.9, 0.8, 0.7],
                            },
                          }}
                        />
                      }
                    >
                      <Avatar
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        alt="Travis Howard"
                        sx={{ width: 150, height: 150, margin: "auto" }}
                        src={cardDescription.profilePicture}
                      />
                    </Badge>
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{ fontSize: 15, marginTop: 3 }}
                      color="#e0f2f1"
                    >
                      {cardDescription.review}
                    </Typography>
                    <Typography
                      color="#e0f2f1"
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        fontFamily: "Helvetica",
                        textAlign: "center",
                        fontSize: 18,
                      }}
                    >
                      {cardDescription.reviewerName}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PatientTestimonial;
