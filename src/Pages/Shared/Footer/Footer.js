import React from "react";
import Box from "@mui/material/Box";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlaceIcon from "@mui/icons-material/Place";

const navigationItems = [
  {
    pageName: "Home",
    to: "/home",
  },
  {
    pageName: "Services",
    to: "/services",
  },
  {
    pageName: "My Appoinments",
    to: "/my-appoinments",
  },
  {
    pageName: "Blog",
    to: "/blog",
  },
  {
    pageName: "About",
    to: "/about",
  },
  {
    pageName: "Dashboard",
    to: "/dashboard",
  },
];
const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        backgroundColor: "#ff1744",
        marginTop: { xs: 0, lg: 0 },
        marginBottom: 0,
      }}
    >
      <Box
        data-aos="fade-up"
        data-aos-duration="1500"
        sx={{
          width: { xs: "80%", lg: "50%" },
          height: { xs: 250, lg: 170 },
          margin: "auto",
          backgroundColor: "#fff",
          marginTop: { xs: -10, lg: -8 },
          borderRadius: 1,
        }}
      >
        <Stack
          sx={{
            marginLeft: { xs: 0, lg: 0 },
          }}
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={
              {
                // height: { xs: 200, lg: 250 },
                // width: { xs: "100%", lg: "50%" },
              }
            }
          >
            <Grid item>
              <CardMedia
                component="img"
                sx={{
                  width: { xs: 150, lg: 150 },
                  marginTop: { xs: 0, lg: 0 },
                  margin: "auto",
                }}
                image="https://i.ibb.co/NZLPtf2/2.png"
                alt="Live from space album cover"
              />
            </Grid>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={
              {
                // height: { xs: 200, lg: 250 },
                // width: { xs: "100%", lg: "50%" },
              }
            }
          >
            <Grid item>
              <Typography
                color="#3f51b5"
                sx={{
                  marginTop: { xs: 0, lg: 0 },
                  margin: "auto",
                  fontSize: { xs: 20, lg: 23 },
                  fontFamily: "Segoe UI",
                  fontWeight: "bold",
                }}
              >
                {" "}
                WE CARE, WE CAN
              </Typography>
            </Grid>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={
              {
                // height: { xs: 150, lg: 250 },
                // width: { xs: "100%", lg: "50%" },
              }
            }
          >
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              sx={{ marginLeft: { xs: 3 } }}
            >
              {navigationItems.map((item, index) => (
                <Grid key={index} item>
                  <List disablePadding>
                    <ListItem component={Link} to={item?.to}>
                      {index === 0 ? (
                        <FacebookRoundedIcon
                          sx={{
                            fontSize: 30,
                            textAlign: "center",
                            color: "#3f51b5",
                            "&:hover": {
                              color: "#6d4c41",
                              opacity: [0.9, 0.8, 0.7],
                            },
                          }}
                        />
                      ) : (
                        <></>
                      )}
                      {index === 1 ? (
                        <WhatsAppIcon
                          sx={{
                            fontSize: 30,
                            textAlign: "center",
                            color: "#009688",
                            "&:hover": {
                              color: "#6d4c41",
                              opacity: [0.9, 0.8, 0.7],
                            },
                          }}
                        />
                      ) : (
                        <></>
                      )}
                      {index === 2 ? (
                        <LinkedInIcon
                          sx={{
                            fontSize: 30,
                            textAlign: "center",
                            color: "#0d47a1",
                            "&:hover": {
                              color: "#6d4c41",
                              opacity: [0.9, 0.8, 0.7],
                            },
                          }}
                        />
                      ) : (
                        <></>
                      )}
                      {index === 3 ? (
                        <InstagramIcon
                          sx={{
                            fontSize: 30,
                            textAlign: "center",
                            color: "#ec407a",
                            "&:hover": {
                              color: "#6d4c41",
                              opacity: [0.9, 0.8, 0.7],
                            },
                          }}
                        />
                      ) : (
                        <></>
                      )}
                    </ListItem>
                  </List>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Box>
      <Stack
        sx={{
          marginTop: { xs: 0, lg: 0 },
          marginLeft: { xs: 0, lg: 0 },
        }}
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: { xs: 250, lg: 400 },
            width: { xs: "100%", lg: "50%" },
          }}
        >
          <Grid item sx={{ marginLeft: { xs: 5, lg: 10 } }}>
            <Typography
              color=""
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontFamily: "Segoe UI",
                fontWeight: "bold",
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

            <Grid container spacing={2} columns={16}>
              <Grid item xs={8}>
                <List>
                  {navigationItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItem
                        component={Link}
                        to={item?.to}
                        sx={{
                          height: 25,
                          textAlign: "left",
                          color: "#eceff1",
                          fontFamily: "Segoe UI",
                          fontWeight: "bold",
                        }}
                      >
                        <ListItemText primary={item?.pageName} />
                      </ListItem>
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={8}>
                <List>
                  {navigationItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItem
                        component={Link}
                        to={item?.to}
                        sx={{ height: 25, textAlign: "left", color: "#eceff1" }}
                      >
                        <ListItemText primary={item?.pageName} />
                      </ListItem>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: { xs: 250, lg: 400 },
            width: { xs: "100%", lg: "50%" },
          }}
        >
          <Grid item sx={{ marginLeft: { xs: 5, lg: 10 } }}>
            <Typography
              color=""
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontFamily: "Segoe UI",
                fontWeight: "bold",
                fontSize: { xs: 25, lg: 40 },
              }}
            >
              (+88)01727-000000
            </Typography>
            <Divider
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

            <Grid container spacing={2} columns={16}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ marginTop: 4 }}
              >
                <Grid item>
                  <PhoneAndroidIcon
                    sx={{
                      fontSize: 50,
                      color: "#FFFFFF",
                      "&:hover": {
                        color: "#6d4c41",
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                  />{" "}
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      fontFamily: "Segoe UI",
                      fontWeight: "bold",
                      fontSize: 19,
                      color: "#FFFFFF",
                    }}
                  >
                    24/7 EMERGENCY NUMBER
                  </Typography>

                  <Typography
                    sx={{
                      width: 280,
                      fontFamily: "Segoe UI",
                      fontWeight: "bold",
                      fontSize: 10,
                      color: "#FFFFFF",
                    }}
                  >
                    Call us now if you are in a medical emergency need, we will
                    reply swiftly and provide you with a medical aid.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ marginTop: 4 }}
              >
                <Grid item>
                  <PlaceIcon
                    sx={{
                      fontSize: 50,
                      color: "#FFFFFF",
                      "&:hover": {
                        color: "#6d4c41",
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                  />{" "}
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      fontFamily: "Segoe UI",
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "#FFFFFF",
                    }}
                  >
                    118/1A MASKANDA,MYMENSINGH
                  </Typography>

                  <Typography
                    sx={{
                      width: 280,
                      fontFamily: "Segoe UI",
                      fontWeight: "bold",
                      fontSize: 10,
                      color: "#FFFFFF",
                    }}
                  >
                    Maskanda Shantinagar,Digarkanda,Mymensingh Sadar,Mymensingh
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Stack>
      <Divider
        style={{
          border: "none",
          height: 6,
          margin: 2,
          color: "#00796b",
        }}
        variant="middle"
      />
      {/* CopyRight  */}

      <Stack
        sx={{
          marginLeft: { xs: 0, lg: 0 },
        }}
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={
            {
              // height: { xs: 200, lg: 250 },
              // width: { xs: "100%", lg: "50%" },
            }
          }
        >
          <Grid item>
            <CardMedia
              component="img"
              sx={{
                width: { xs: 150, lg: 150 },
                marginTop: { xs: 0, lg: 0 },
                margin: "auto",
              }}
              image="https://i.ibb.co/jDJYwp2/dfgadsgadsg.png"
              alt="Live from space album cover"
            />
          </Grid>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={
            {
              // height: { xs: 200, lg: 250 },
              // width: { xs: "100%", lg: "50%" },
            }
          }
        >
          <Grid item>
            <Typography
              sx={{
                marginTop: { xs: -1, lg: -1 },
                margin: "auto",
                fontSize: { xs: 10, lg: 10 },
                fontFamily: "Segoe UI",
                fontWeight: "bold",
              }}
            >
              {" "}
              Copyright by SamiulDevelopments 2023. All rights reserved.
            </Typography>
          </Grid>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={
            {
              // height: { xs: 150, lg: 250 },
              // width: { xs: "100%", lg: "50%" },
            }
          }
        ></Box>
      </Stack>
    </Box>
  );
};

export default Footer;
