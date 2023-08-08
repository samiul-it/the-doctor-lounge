import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "./../../../Firebase/firebase.init";
import Loading from "./../../Loading/Loading";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { async } from "@firebase/util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Chip } from "@mui/material";
// import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, errorReset] =
    useSendPasswordResetEmail(auth);

  //Form Control by MUI

  //MUI FORM
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log(userEmail);
    console.log(password);
    signInWithEmailAndPassword(userEmail, password);
    console.log("Log in Successful");
    console.log(user);
  };

  // Modal Functions
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  if (error) {
    return <h5 className="text-danger"> {error.message}</h5>;
  }
  if (loading) {
    return <Loading></Loading>;
  }
  const handleResetPassword = async () => {
    if (userEmail) {
      await sendPasswordResetEmail(userEmail);
      toast.info("Reset Password Mail Sent", {
        theme: "colored",
      });
      handleClose();
    } else {
      toast.error("Enter Email Address", {
        theme: "colored",
      });
    }
  };

  // Modal Styling for Password Reset
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      {/* // MUI Updated UI */}
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
                  Please Login
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6" component="div">
                  Pay
                </Typography>
              </Grid>
            </Grid>

            {/* MUI FORM WITH USE STATE */}

            <form onSubmit={handleClick}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email"
                type="email"
                id="email"
                color="secondary"
                autoComplete="current-password"
                autoFocus
                value={userEmail}
                onChange={(event) => {
                  setUserEmail(event.target.value);
                }} //whenever the text field change, you save the value in state
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color="secondary"
                autoFocus
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }} //whenever the text field change, you save the value in state
              />
              <Button
                style={{
                  backgroundColor: "#4caf50",
                }}
                sx={{ mt: 1 }}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                //  className={classes.submit}
                // onClick={handleClick}
              >
                Sign In
              </Button>
            </form>
            <Divider sx={{ mt: 2 }}>
              <Chip
                style={{
                  backgroundColor: "#80deea",
                }}
                label="OR"
              />
            </Divider>
            <GoogleLogin></GoogleLogin>
            <Typography
              variant="overline"
              sx={{
                fontSize: { xs: 14, lg: 15 },
                color: { xs: "#ef6c00", lg: "#ef6c00" },
              }}
            >
              Don't have account?{" "}
              <Link to="/register" onClick={navigateToLogin}>
                {" "}
                Register Here{" "}
              </Link>
              {/* Moadl for Password Reset  */}
              <Button
                sx={{
                  fontSize: { xs: 14, lg: 15 },
                  color: { xs: "#d50000", lg: "#d50000" },
                }}
                onClick={handleOpen}
              >
                Reset Password
              </Button>
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Modal  */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="overline"
            sx={{
              fontSize: { xs: 14, lg: 15 },
              color: { xs: "#ef6c00", lg: "#ef6c00" },
            }}
            id="modal-modal-title"
          >
            Please enter your email address
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
            color="secondary"
            autoComplete="current-password"
            autoFocus
            value={userEmail}
            onChange={(event) => {
              setUserEmail(event.target.value);
            }} //whenever the text field change, you save the value in state
          />
          <Button
            style={{
              backgroundColor: "#e3f2fd",
            }}
            sx={{
              fontSize: { xs: 14, lg: 15 },
              color: { xs: "#d50000", lg: "#d50000" },
            }}
            fullWidth
            onClick={handleResetPassword}
          >
            Request New Password
          </Button>
        </Box>
      </Modal>

      {/* Toast  */}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Login;
