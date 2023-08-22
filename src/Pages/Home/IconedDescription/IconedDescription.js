import {
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
import React from "react";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import SpaIcon from "@mui/icons-material/Spa";

const IconedDescription = () => {
  const cardDescriptions = [
    {
      shortTitle: "A BETTER LIFE",
      title: "Heart surgery",

      description:
        "Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes.",
      cardColor: "#de1d3c",
    },
    {
      shortTitle: "GETTING A NEW CHANCE",
      title: "Heart surgery",

      description:
        "Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverable applications.",
      cardColor: "#d51030",
    },
    {
      shortTitle: "SAVING LIVES",
      title: "Heart surgery",

      description:
        "Continually reintermediate integrated processes through technically sound intellectual capital. Holistically foster superior methodologies.",
      cardColor: "#c60c2a",
    },
  ];

  return (
    <Box sx={{ marginTop: { xs: 5, lg: 5 }, marginBottom: 5 }}>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={{ lg: "100" }}>
            {cardDescriptions.map((cardDescription, index) => (
              <Grid key={index} item>
                <Card
                  sx={{
                    borderRadius: 0,
                    maxWidth: { xs: 300, lg: 340 },
                    boxShadow: 0,
                  }}
                >
                  <CardContent
                    sx={{
                      height: 300,
                      backgroundColor: "#fff",
                      color: "#9c27b0",
                      textAlign: "center",
                    }}
                  >
                    {index === 0 ? (
                      <MonitorHeartIcon
                        sx={{
                          "&:hover": {
                            color: "#212121",
                            opacity: [0.9, 0.8, 0.7],
                          },
                          width: 80,
                          height: 80,
                        }}
                      />
                    ) : (
                      <></>
                    )}
                    {index === 1 ? (
                      <HeartBrokenIcon
                        sx={{
                          "&:hover": {
                            color: "#212121",
                            opacity: [0.9, 0.8, 0.7],
                          },
                          width: 80,
                          height: 80,
                        }}
                      />
                    ) : (
                      <></>
                    )}
                    {index === 2 ? (
                      <SpaIcon
                        sx={{
                          "&:hover": {
                            color: "#212121",
                            opacity: [0.9, 0.8, 0.7],
                          },
                          width: 80,
                          height: 80,
                        }}
                      />
                    ) : (
                      <></>
                    )}

                    <Typography
                      color="#9c27b0"
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        fontFamily: "Helvetica",
                        textAlign: "center",
                      }}
                    >
                      {cardDescription.shortTitle}
                    </Typography>
                    <Divider
                      gutterBottom
                      sx={{
                        width: "100%",
                      }}
                      style={{
                        border: "none",
                        height: 6,
                        margin: 2,
                      }}
                    />
                    <Typography
                      color="#9c27b0"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {cardDescription.title}
                    </Typography>
                    <Typography variant="body2" color="#9c27b0">
                      {cardDescription.description}
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

export default IconedDescription;
