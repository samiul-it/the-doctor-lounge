import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Loading/Loading";
import { toast } from "react-toastify";
import useServiceDetail from "../../../hooks/useServiceDetail";

const Appoinments = () => {
  const { isLoading, refetch, error, data } = useQuery("all-appoinments", () =>
    fetch(`http://localhost:5000/all-appoinments`).then((res) => res.json())
  );

  // Delete Appoinment
  const handleDeleteAppoinment = (id) => {
    const confirmDelete = window.confirm("Are you Sure?");
    if (confirmDelete) {
      const url = `http://localhost:5000/all-appoinments/${id}`;
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

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(data);

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
                          <Box
                            sx={{ mt: 1 }}
                            variant="contained"
                            color="primary"
                          >
                            <DeleteIcon
                              onClick={() =>
                                handleDeleteAppoinment(appoinment?._id)
                              }
                            />
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
