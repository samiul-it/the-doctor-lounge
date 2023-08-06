import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import "./GoogleLogin.css";
import auth from "./../../../Firebase/firebase.init";
import Loading from "../../Loading/Loading";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@mui/material";

const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);
  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    console.log(error.message);
  }
  return (
    <div>
      <Button
        style={{
          backgroundColor: "#fb8c00",
        }}
        sx={{ mt: 1 }}
        type="submit"
        fullWidth
        variant="contained"
        onClick={handleGoogleLogin}
      >
        <FaGoogle size={"1.0em"}></FaGoogle> Google Login
      </Button>
    </div>
  );
};

export default GoogleLogin;
