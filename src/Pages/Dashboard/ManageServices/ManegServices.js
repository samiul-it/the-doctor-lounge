import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ServiceTable from "../ServiceTable/ServiceTable";

const ManageServices = () => {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: 360, lg: 699 },
            bgcolor: "background.paper",
          }}
        >
          <Box sx={{ my: 3, mx: 2 }}>
            <Grid container alignItems="center">
              <Grid item></Grid>
              <Grid item xs>
                <Typography
                  variant="overline"
                  sx={{
                    fontSize: { xs: 18, lg: 25 },
                    color: { xs: "#ef6c00", lg: "#ef6c00" },
                  }}
                >
                  Welcome to Manage Services Page
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6" component="div">
                  Pay
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <ServiceTable></ServiceTable>
        </Box>
      </Box>
    </div>
  );
};

export default ManageServices;
