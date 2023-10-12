import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Loading/Loading";
import { toast } from "react-toastify";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CancelIcon from "@mui/icons-material/Cancel";
import RestoreIcon from "@mui/icons-material/Restore";
import useServiceDetail from "../../../hooks/useServiceDetail";

const Appoinments = () => {
  const { isLoading, refetch, error, data } = useQuery("all-appoinments", () =>
    fetch(`https://dermacare-server.onrender.com/all-appoinments`).then((res) => res.json())
  );

  const seenStatus = "seen";
  const rescheduleStatus = "rescheduled";
  const cancelStatus = "canceled";

  // Delete Appoinment
  const handleDeleteAppoinment = (id) => {
    const confirmDelete = window.confirm("Are you Sure?");
    if (confirmDelete) {
      const url = `https://dermacare-server.onrender.com/all-appoinments/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.info("Appoinment Deleted");
          refetch();
        });
    }
  };

  // Updaing Status

  const handleUpdateAppoinmentStatus = (e, id, newStatus) => {
    e.preventDefault();

    // const descriptionUpdate = descriptionUpdateRef.current.value;

    const url = `https://dermacare-server.onrender.com/appoinment-status/${id}`;
    console.log(id, newStatus);

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newStatus }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        refetch();
      })
      .then(toast.success("Success!Appoinment Status Updated"));
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

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
                  Welcome to Appoinments Page
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
                      <TableCell>Service Name</TableCell>
                      <TableCell align="right">User</TableCell>
                      <TableCell align="right">Appoinment </TableCell>

                      <TableCell align="right">Fees</TableCell>
                      <TableCell align="right">Status</TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((appoinment, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {index + 1}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {appoinment?.serviceName}
                        </TableCell>
                        <TableCell align="right">
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography>{appoinment?.userName}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>{appoinment?.userEmail}</Typography>
                            </AccordionDetails>
                          </Accordion>
                        </TableCell>

                        <TableCell align="right">
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography>
                                {appoinment?.appoinmentDate}
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                Time:{appoinment?.appoinmentTime}PM{" "}
                              </Typography>
                              <Typography>
                                Placed At:{appoinment?.appoinmentPlacedAt}{" "}
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </TableCell>

                        <TableCell align="right">{appoinment?.fees}</TableCell>
                        <TableCell align="right">
                          {appoinment?.status}
                        </TableCell>
                        <TableCell align="right">
                          <Box
                            sx={{ mt: 1 }}
                            variant="contained"
                            color="primary"
                          >
                            <Button
                              disabled={appoinment?.status === "seen"}
                              onClick={(e) =>
                                handleUpdateAppoinmentStatus(
                                  e,
                                  appoinment?._id,
                                  seenStatus
                                )
                              }
                              variant="outlined"
                              startIcon={<DoneAllIcon />}
                            >
                              Seen
                            </Button>
                            <Button
                              disabled={appoinment?.status === "seen"}
                              onClick={(e) =>
                                handleUpdateAppoinmentStatus(
                                  e,
                                  appoinment?._id,
                                  rescheduleStatus
                                )
                              }
                              variant="outlined"
                              startIcon={<RestoreIcon />}
                            >
                              Reschedule
                            </Button>
                            <Button
                              disabled={appoinment?.status === "seen"}
                              onClick={(e) =>
                                handleUpdateAppoinmentStatus(
                                  e,
                                  appoinment?._id,
                                  cancelStatus
                                )
                              }
                              variant="outlined"
                              startIcon={<CancelIcon />}
                            >
                              Cancel
                            </Button>
                            <Button
                              onClick={() =>
                                handleDeleteAppoinment(appoinment?._id)
                              }
                              variant="outlined"
                              startIcon={<DeleteIcon />}
                            >
                              Delete
                            </Button>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
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

export default Appoinments;
