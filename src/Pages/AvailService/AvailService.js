import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Grid, Typography } from "@mui/material";
import useServiceDetail from "../../hooks/useServiceDetail";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DateCalendar, TimeClock } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const today = dayjs();
const twoPM = dayjs().set("hour", 14).startOf("hour");
const ninePM = dayjs().set("hour", 21).startOf("hour");
// const todayStartOfTheDay = today.startOf("day");

const AvailService = () => {
  const [user, loading] = useAuthState(auth);
  // console.log(user);
  const { service_id } = useParams();
  const navigate = useNavigate();

  const [serviceDetail, serviceDetailLoading] = useServiceDetail(service_id);
  const { serviceName, _id, description, img, fees } = serviceDetail;

  // Navigate after Appoinment
  const navigateToAvailService = (appoinment_id) => {
    navigate(`/my-appoinments/${appoinment_id}`);
  };

  // Date Picker
  const [selectedDate, setSelectedDate] = useState(today | "");
  const [selectedTime, setSelectedTime] = useState(twoPM | "");

  //Service Detail Steps

  const steps = [
    {
      label: serviceName,
      description: description,
    },
    {
      label: "Select Schedule",
      description: "Select Date and time from the Left Calander",
    },
  ];

  //Steper to Confirm Service

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(new Date().toLocaleString() + "");
    // console.log(user.displayName);
    // console.log(user.email);
    // console.log(
    //   selectedDate?.$d,
    //   selectedTime?.$H,
    //   ":",
    //   selectedTime?.$m,
    //   "PM"
    // );

    const appoinmentDetails = {
      userName: user?.displayName,
      serviceId: _id,
      serviceName: serviceName,
      fees,
      userEmail: user?.email,
      appoinmentDate: selectedDate?.$d,
      appoinmentTime: selectedTime?.$H + ":" + selectedTime?.$m,
      appoinmentPlacedAt: new Date().toLocaleString() + "",
    };
    console.log(appoinmentDetails);

    const url = "http://localhost:5000/appoinments";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appoinmentDetails),
    })
      .then((res) => res.json())
      .then((result) => navigateToAvailService(result.insertedId));
  };

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
                  Welcome to Take Appoinment Page
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6" component="div">
                  Payy
                </Typography>
              </Grid>
            </Grid>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid
                container
                columns={{ xs: 1, lg: 2 }}
                spacing={4}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item>
                  <DateCalendar
                    onChange={(newSelection, x) => {
                      setSelectedDate(newSelection);
                    }}
                    // defaultValue={today}
                    disablePast
                  />
                </Grid>
                <Grid item>
                  <TimeClock
                    onChange={(newSelection, x) => {
                      setSelectedTime(newSelection);
                    }}
                    defaultValue={twoPM}
                    minTime={twoPM}
                    maxTime={ninePM}
                  />
                </Grid>
              </Grid>
            </LocalizationProvider>
            <Grid item>
              <Typography gutterBottom variant="h6" component="div">
                {/* {dispalyDt} */}
              </Typography>
            </Grid>
          </Box>
        </Box>

        {/* Stepper Code  */}
        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={
                          index === steps.length - 1 ? handleNext : handleNext
                        }
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1
                          ? "Are you sure?"
                          : "Proceed"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>You are about to book</Typography>
              <Button onClick={handleSubmit} sx={{ mt: 1, mr: 1 }}>
                Complete Booking
              </Button>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default AvailService;
