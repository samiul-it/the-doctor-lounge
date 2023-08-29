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

const StyledDescription = () => {
  const cardDescriptions = [
    {
      shortTitle: "A BETTER LIFE",
      largeTitle: "Heart surgery",
      imageLink: "https://customerthink.com/wp-content/uploads/lady-doctor.jpg",
      description:
        "Uniquely deploy cross-unit benefits with wireless testing procedures. Collaboratively build backward compatible relationships whereas tactical paradigms.",
      link: "",
      cardColor: "#de1d3c",
    },
    {
      shortTitle: "GETTING A NEW CHANCE",
      largeTitle: "Derma Treatment",
      imageLink:
        "https://www.staffcare.com/siteassets/blogs/locum-tenens-news/building-patient-doctor-trust.jpg",
      description:
        "Uniquely deploy cross-unit benefits with wireless testing procedures. Collaboratively build backward compatible relationships whereas tactical paradigms.",
      link: "",
      cardColor: "#d51030",
    },
    {
      shortTitle: "SAVING LIVES",
      largeTitle: "Acne",
      imageLink:
        "https://completewellbeing.com/wp-content/uploads/2017/02/is-it-time-to-change-your-doctor.jpg",
      description:
        "Uniquely deploy cross-unit benefits with wireless testing procedures. Collaboratively build backward compatible relationships whereas tactical paradigms.",
      link: "",
      cardColor: "#c60c2a",
    },
  ];
  return (
    <Box sx={{ marginTop: { xs: 5, lg: 5 }, marginBottom: 5 }}>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing="0">
            {cardDescriptions.map((cardDescription, index) => (
              <Grid key={index} item>
                <Card
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  sx={{ borderRadius: 0, maxWidth: { xs: 300, lg: 340 } }}
                >
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
                        backgroundColor: "#d51030",
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                  >
                    <Typography
                      color="#ffebee"
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        fontFamily: "Helvetica",
                      }}
                    >
                      {cardDescription.shortTitle}
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
                    <Typography
                      color="#ffebee"
                      gutterBottom
                      variant="h4"
                      component="div"
                    >
                      {cardDescription.largeTitle}
                    </Typography>
                    <Typography variant="body2" color="#ffebee">
                      {cardDescription.description}
                    </Typography>

                    <Button
                      style={{
                        backgroundColor: "#ffebee",
                        color: "#212121",
                      }}
                      sx={{ marginTop: 5, borderRadius: 28 }}
                      variant="contained"
                    >
                      Know More
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

export default StyledDescription;
