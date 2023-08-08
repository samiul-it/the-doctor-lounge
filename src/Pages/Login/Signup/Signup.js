import React, { useEffect, useRef, useState } from "react";
import auth from "./../../../Firebase/firebase.init";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { async } from "@firebase/util";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Chip } from "@mui/material";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  // Auth State

  const [existingUser, existingLoading] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [sendEmailVerification, sending] = useSendEmailVerification();
  const emailRef = useRef("");
  const nameRef = useRef("");
  const passwordRef = useRef("");

  const nevigate = useNavigate();

  //MUI FORM
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userEmail);
    console.log(userName);
    console.log(password);

    createUserWithEmailAndPassword(userEmail, password);
    console.log("User Created!");
    nevigate("/services");
    console.log("Log in Successful");
    console.log(user);
  };

  useEffect(() => {
    if (existingUser) {
      navigate(from, { replace: true });
    }
  }, [existingUser]);

  const navigateToLogin = () => {
    nevigate("/login");
  };

  if (error) {
    return <h5 className="text-danger"> {error.message}</h5>;
  }
  if (loading) {
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
                  Please Register Here
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6" component="div">
                  Pay
                </Typography>
              </Grid>
            </Grid>

            {/* MUI FORM WITH USE STATE */}

            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="userName"
                label="Your Name"
                type="text"
                id="userName"
                color="secondary"
                autoFocus
                value={userName}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
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
                autoFocus
                value={userEmail}
                onChange={(event) => {
                  setUserEmail(event.target.value);
                }}
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
                color="secondary"
                autoFocus
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
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
                // onClick={handleSubmit}
              >
                Sign Up
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
              Already have an account?{" "}
              <Link to="/login" onClick={navigateToLogin}>
                {" "}
                Login Here{" "}
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Signup;
