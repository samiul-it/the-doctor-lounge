import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

const SlidingBanner = () => {
  return (
    <Box sx={{ marginTop: { xs: 2 } }}>
      <Carousel showStatus={false} showThumbs={false} autoPlay={false}>
        <div>
          <img src="https://i.ibb.co/8P120Xk/closeup-beautiful-smiling-girl-with-red-hair-showing-peace-kawaii-sign-standing-with-eyes-closed.jpg" />
          <Grid item>
            <Card
              sx={{
                borderRadius: 0,
                maxWidth: { xs: 220, lg: 450 },
                marginTop: { xs: -20, lg: -60 },
                marginLeft: { lg: 8 },
              }}
            >
              <CardContent
                sx={{
                  backgroundColor: "#ffe082",
                  marginBottom: { lg: 10 },
                }}
              >
                <Typography
                  color="#00796b"
                  component="div"
                  sx={{
                    fontFamily: "Segoe UI",

                    fontSize: {
                      lg: 25,
                      xs: 12,
                    },
                  }}
                >
                  INSPIRING BETTER HEALTH
                </Typography>
                <Divider variant="inset" component="li" />
                <Typography
                  color="#ff1744"
                  gutterBottom
                  component="div"
                  sx={{
                    fontFamily: "Segoe UI",
                    fontWeight: "bold",
                    fontSize: {
                      lg: 60,
                      xs: 25,
                    },
                  }}
                >
                  Healthy Skin
                </Typography>
                <Typography
                  display={{ xs: "none", lg: "block" }}
                  sx={{
                    fontFamily: "Segoe UI",
                    fontSize: {
                      lg: 15,
                      xs: 8,
                    },
                  }}
                  variant="body2"
                >
                  Globally harness multimedia based collaboration and
                  idea-sharing with backend products. Continually whiteboard
                  superior opportunities via covalent scenarios.
                </Typography>

                <Button
                  sx={{
                    marginTop: { xs: 0, lg: 5 },
                    borderRadius: 28,
                    height: { xs: 12, lg: 35 },
                    fontSize: { xs: 10, lg: 15 },
                    backgroundColor: "#ff1744",
                    fontFamily: "Segoe UI",
                  }}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  DISCOVER MORE
                </Button>
                <Button
                  sx={{
                    marginTop: { xs: 0, lg: 5 },
                    marginLeft: { xs: 0, lg: 2 },
                    borderRadius: 28,
                    height: { xs: 12, lg: 35 },
                    fontSize: { xs: 10, lg: 15 },
                    backgroundColor: "#212121",
                    fontFamily: "Segoe UI",
                  }}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  View Our Services
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </div>

        <div>
          <img src="https://i.ibb.co/kQkS0mP/portrait-smiling-doctor-female-physician-showing-heart-sign-looking-with-care-love-her-patien.jpg" />
          <Grid item>
            <Card
              sx={{
                borderRadius: 0,
                maxWidth: { xs: 220, lg: 450 },
                marginTop: { xs: -20, lg: -60 },
                marginLeft: { lg: 8 },
              }}
            >
              <CardContent
                sx={{
                  backgroundColor: "#ffe082",
                  marginBottom: { lg: 10 },
                }}
              >
                <Typography
                  color="#00796b"
                  component="div"
                  sx={{
                    fontFamily: "Segoe UI",

                    fontSize: {
                      lg: 25,
                      xs: 12,
                    },
                  }}
                >
                  GROWING TO MEET YOUR NEEDS
                </Typography>
                <Divider variant="inset" component="li" />
                <Typography
                  color="#ff1744"
                  gutterBottom
                  component="div"
                  sx={{
                    fontFamily: "Segoe UI",
                    fontWeight: "bold",
                    fontSize: {
                      lg: 60,
                      xs: 25,
                    },
                  }}
                >
                  Your health
                </Typography>
                <Typography
                  display={{ xs: "none", lg: "block" }}
                  sx={{
                    fontFamily: "Segoe UI",
                    fontSize: {
                      lg: 15,
                      xs: 8,
                    },
                  }}
                  variant="body2"
                >
                  Compellingly embrace empowered e-business after user friendly
                  intellectual capital. Interactively actualize front-end
                  processes with effective convergence.
                </Typography>

                <Button
                  sx={{
                    marginTop: { xs: 0, lg: 5 },
                    borderRadius: 28,
                    height: { xs: 12, lg: 35 },
                    fontSize: { xs: 10, lg: 15 },
                    backgroundColor: "#ff1744",
                    fontFamily: "Segoe UI",
                  }}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  DISCOVER MORE
                </Button>
                <Button
                  sx={{
                    marginTop: { xs: 0, lg: 5 },
                    marginLeft: { xs: 0, lg: 2 },
                    borderRadius: 28,
                    height: { xs: 12, lg: 35 },
                    fontSize: { xs: 10, lg: 15 },
                    backgroundColor: "#212121",
                    fontFamily: "Segoe UI",
                  }}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  View Our Services
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </div>
        <div>
          <img src="https://i.ibb.co/z29QcbL/close-up-portrait-beautiful-young-woman-with-make-up-looking-dreamy-upper-left-corner-feeling.jpg" />
          <Grid item>
            <Card
              sx={{
                borderRadius: 0,
                maxWidth: { xs: 220, lg: 450 },
                marginTop: { xs: -20, lg: -60 },
                marginLeft: { lg: 8 },
              }}
            >
              <CardContent
                sx={{
                  backgroundColor: "#ffe082",
                  marginBottom: { lg: 10 },
                }}
              >
                <Typography
                  color="#00796b"
                  component="div"
                  sx={{
                    fontFamily: "Segoe UI",

                    fontSize: {
                      lg: 25,
                      xs: 12,
                    },
                  }}
                >
                  GROWING TO MEET YOUR NEEDS
                </Typography>
                <Divider variant="inset" component="li" />
                <Typography
                  color="#ff1744"
                  gutterBottom
                  component="div"
                  sx={{
                    fontFamily: "Segoe UI",
                    fontWeight: "bold",
                    fontSize: {
                      lg: 60,
                      xs: 25,
                    },
                  }}
                >
                  Your Wealth
                </Typography>
                <Typography
                  display={{ xs: "none", lg: "block" }}
                  sx={{
                    fontFamily: "Segoe UI",
                    fontSize: {
                      lg: 15,
                      xs: 8,
                    },
                  }}
                  variant="body2"
                >
                  Compellingly embrace empowered e-business after user friendly
                  intellectual capital. Interactively actualize front-end
                  processes with effective convergence.
                </Typography>

                <Button
                  sx={{
                    marginTop: { xs: 0, lg: 5 },
                    borderRadius: 28,
                    height: { xs: 12, lg: 35 },
                    fontSize: { xs: 10, lg: 15 },
                    backgroundColor: "#ff1744",
                    fontFamily: "Segoe UI",
                  }}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  DISCOVER MORE
                </Button>
                <Button
                  sx={{
                    marginTop: { xs: 0, lg: 5 },
                    marginLeft: { xs: 0, lg: 2 },
                    borderRadius: 28,
                    height: { xs: 12, lg: 35 },
                    fontSize: { xs: 10, lg: 15 },
                    backgroundColor: "#212121",
                    fontFamily: "Segoe UI",
                  }}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  View Our Services
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </Carousel>
    </Box>
  );
};

export default SlidingBanner;
