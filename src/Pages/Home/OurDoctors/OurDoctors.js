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

const OurDoctors = () => {
  const cardDescriptions = [
    {
      designation: "Dermatologist",
      doctorName: "Clara Cox",
      imageLink:
        "https://media.istockphoto.com/id/1346711310/photo/portrait-of-smiling-female-doctor-wearing-uniform-standing.webp?b=1&s=170667a&w=0&k=20&c=MP4Uz3zLO_2i8WGmcYaQgz8mOh2IrRjf5byFhqKRroY=",
      description:
        "Uniquely deploy cross-unit benefits with wireless testing procedures. Collaboratively build backward compatible relationships whereas tactical paradigms.",
      link: "",
      cardColor: "#ffd740",
    },
    {
      designation: "GETTING A NEW CHANCE",
      doctorName: "Heart surgery",
      imageLink:
        "https://img.freepik.com/premium-photo/covid-19-coronavirus-outbreak-healthcare-workers-pandemic-concept_1258-19738.jpg",
      description:
        "Uniquely deploy cross-unit benefits with wireless testing procedures. Collaboratively build backward compatible relationships whereas tactical paradigms.",
      link: "",
      cardColor: "#ffc400",
    },
    {
      designation: "SAVING LIVES",
      doctorName: "Heart surgery",
      imageLink:
        "https://t4.ftcdn.net/jpg/02/20/30/45/360_F_220304581_3BRbk3UhoYrcVlt72fdBcVRHBtHAKuvD.jpg",
      description:
        "Uniquely deploy cross-unit benefits with wireless testing procedures. Collaboratively build backward compatible relationships whereas tactical paradigms.",
      link: "",
      cardColor: "#ffab00",
    },
  ];

  return (
    <Box sx={{ marginTop: { xs: 5, lg: 5 }, marginBottom: 5 }}>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing="15">
            {cardDescriptions.map((cardDescription, index) => (
              <Grid key={index} item>
                <Card sx={{ borderRadius: 0, maxWidth: { xs: 300, lg: 340 } }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={cardDescription.imageLink}
                    alt="green iguana"
                  />
                  <CardContent
                    sx={{
                      height: 300,
                      backgroundColor: cardDescription.cardColor,
                      "&:hover": {
                        backgroundColor: "#ffe082",
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        fontFamily: "Helvetica",
                      }}
                    >
                      {cardDescription.designation}
                    </Typography>
                    <Divider
                      gutterBottom
                      sx={{
                        width: 70,
                      }}
                      style={{
                        border: "none",
                        height: 6,
                        margin: 2,
                      }}
                    />
                    <Typography gutterBottom variant="h4" component="div">
                      {cardDescription.doctorName}
                    </Typography>
                    <Typography variant="body2">
                      {cardDescription.description}
                    </Typography>

                    <Button
                      style={{
                        backgroundColor: "#388e3c",
                        color: "#ffebee",
                      }}
                      sx={{ marginTop: 5, borderRadius: 28 }}
                      variant="contained"
                    >
                      See Full Profile
                    </Button>
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

export default OurDoctors;
