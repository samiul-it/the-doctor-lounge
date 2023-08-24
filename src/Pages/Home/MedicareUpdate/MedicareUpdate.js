import React from "react";
import Box from "@mui/material/Box";
import { Button, Grid, Stack, Typography } from "@mui/material";

const MedicareUpdate = () => {
  return (
    <Stack
      sx={{
        marginTop: { xs: 2, lg: 5 },
        marginLeft: { xs: 2, lg: 15 },
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
          height: { xs: 200, lg: 250 },
          width: { xs: "100%", lg: "50%" },
        }}
      >
        <Grid item>
          <Typography
            color="#bf360c"
            gutterBottom
            component="div"
            sx={{
              fontFamily: "Bookman",
              fontWeight: "bold",
              fontSize: {
                lg: 70,
                xs: 40,
              },
            }}
          >
            Medicare updates
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 14, lg: 18 }, m: 1 }}
            variant="body2"
          >
            Some up and coming trends are healthcare consolidation for
            independent healthcare centers that see a cut in unforeseen payouts.
            High deductible health plans are also expected to transpire along
            with a growth of independent practices.
          </Typography>
        </Grid>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: { xs: 150, lg: 250 },
          width: { xs: "100%", lg: "50%" },
        }}
      >
        <Grid item>
          <Typography
            gutterBottom
            component="div"
            sx={{
              fontFamily: "Bookman",
              fontWeight: "bold",
              fontSize: {
                lg: 70,
                xs: 35,
              },
            }}
          >
            <Button
              sx={{
                borderRadius: 28,
                height: { xs: 50, lg: 55 },
                fontSize: 18,
                backgroundColor: "#ff6f00",
              }}
              variant="contained"
              size="large"
              color="secondary"
            >
              View All News
            </Button>
          </Typography>
        </Grid>
      </Box>
    </Stack>
  );
};

export default MedicareUpdate;
