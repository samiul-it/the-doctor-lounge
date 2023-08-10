import {
  Avatar,
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";

const MyAppoinments = () => {
  const { appoinment_id } = useParams();

  const { isLoading, error, data } = useQuery("myAppoinment", () =>
    fetch(`http://localhost:5000/my-appoinments/${appoinment_id}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return "Loading...";
  }

  console.log(data?.serviceId);
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
                  Welcome to My Appoinments Page
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6" component="div">
                  Pay
                </Typography>
              </Grid>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>#SL</TableCell>

                      <TableCell align="right">Appoinment Date </TableCell>
                      <TableCell align="right">Appoinment Time</TableCell>
                      <TableCell align="right">Appoinment Issued</TableCell>

                      <TableCell align="right">Treatment</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        1
                      </TableCell>

                      <TableCell align="right">
                        {data?.appoinmentDate}
                      </TableCell>
                      <TableCell align="right">
                        {data?.appoinmentTime}
                      </TableCell>
                      <TableCell align="right">
                        {data?.appoinmentPlacedAt}
                      </TableCell>

                      <TableCell align="right">Treatment</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MyAppoinments;
