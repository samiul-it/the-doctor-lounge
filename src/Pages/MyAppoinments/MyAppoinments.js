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
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import CountUp from "react-countup";

const MyAppoinments = () => {
  const [user, loading] = useAuthState(auth);

  const { isLoading, refetch, error, data } = useQuery("myAppoinment", () =>
    fetch(`https://dermacare-server.onrender.com/my-appoinments/email/${user?.email}`).then(
      (res) => res.json()
    )
  );

  // refetch();

  if (isLoading) {
    return "Loading...";
  }
  // console.log(data?.length <= 0);
  // if (loading) {
  //   return "Loading...";
  // }

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

              {data?.length <= 0 ? (
                <>
                  <Typography gutterBottom variant="h6" component="div">
                    You do not have any appoinment!
                  </Typography>
                </>
              ) : (
                <>
                  {" "}
                  <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>#SL</TableCell>

                          <TableCell align="center">Service Name</TableCell>

                          <TableCell align="center">Fees</TableCell>

                          <TableCell align="center">Appoinment Date</TableCell>
                          <TableCell align="center">Appoinment Time</TableCell>
                          <TableCell align="center">Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data?.map((appoinment, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {index + 1}
                            </TableCell>
                            <TableCell align="center">
                              {appoinment?.serviceName}
                            </TableCell>

                            <TableCell align="center">
                              {appoinment?.fees}
                            </TableCell>

                            <TableCell align="center">
                              {appoinment?.appoinmentDate}
                            </TableCell>
                            <TableCell>
                              {appoinment?.appoinmentTime} PM
                            </TableCell>
                            <TableCell>{appoinment?.status} </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </>
              )}
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MyAppoinments;
