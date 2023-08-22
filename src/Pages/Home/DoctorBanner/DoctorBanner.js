import {
  Avatar,
  Box,
  CardMedia,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

const DoctorBanner = () => {
  return (
    <div>
      <Stack
        sx={{
          backgroundColor: "#fff",
          marginLeft: { xs: 5, lg: 10 },
          marginTop: { xs: 20, lg: 15 },
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
            height: { xs: 450, lg: 600 },
            width: { xs: "100%", lg: "50%" },
          }}
        >
          <Grid item>
            <Typography
              color="#ff6d00"
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontFamily: "Helvetica",
              }}
            >
              INTRODUCING OUR TEAM
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
              color="#00796b"
              gutterBottom
              component="div"
              sx={{
                fontFamily: "Bookman",
                fontWeight: "bold",
                fontSize: {
                  lg: 70,
                  xs: 45,
                },
              }}
            >
              Great passion
            </Typography>
            <Typography
              color="#bf360c"
              gutterBottom
              component="div"
              sx={{
                fontFamily: "Optima",
                fontSize: {
                  lg: 60,
                  xs: 45,
                },
              }}
            >
              for healing
            </Typography>
            <Typography
              sx={{ fontSize: { xs: 14, lg: 18 }, m: 1 }}
              variant="body2"
            >
              Some up and coming trends are healthcare consolidation for
              independent healthcare centers that see a cut in unforeseen
              payouts. High deductible health plans are also expected to
              transpire along with a growth of independent practices.
            </Typography>
            <Divider sx={{ fontSize: 18, m: 1 }} />
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      bgcolor: "#00796b",
                      "&:hover": {
                        backgroundColor: "#d51030",
                        opacity: [0.9, 0.8, 0.7],
                      },
                      width: 60,
                      height: 60,
                    }}
                  >
                    <HealthAndSafetyIcon sx={{ width: 40, height: 40 }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    marginLeft: 2,
                  }}
                  primary="
                  PROFESSIONAL TEAM"
                  secondary="Globally harness multimedia based collaboration and idea-sharing with backend products. Continually whiteboard superior opportunities."
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      bgcolor: "#00796b",
                      "&:hover": {
                        backgroundColor: "#d51030",
                        opacity: [0.9, 0.8, 0.7],
                      },
                      width: 60,
                      height: 60,
                    }}
                  >
                    <MonitorHeartIcon sx={{ width: 40, height: 40 }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{ marginLeft: 2 }}
                  primary="SERVICES AND TECHNOLOGY
                  "
                  secondary="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.

                  "
                />
              </ListItem>
            </List>
          </Grid>
        </Box>

        <Box
          sx={{
            height: { xs: 450, lg: 600 },
            width: { xs: "100%", lg: "50%" },
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: { xs: 300, lg: 650 },

              marginTop: { xs: 20, lg: 0 },
              marginRight: { xs: 25 },
            }}
            image="https://pnghq.com/wp-content/uploads/2023/02/transparent-female-doctor-png-8595.png"
            alt="Live from space album cover"
          />
        </Box>
      </Stack>
    </div>
  );
};

export default DoctorBanner;
