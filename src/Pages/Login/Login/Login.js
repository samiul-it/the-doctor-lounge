import React from "react";
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
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, errorReset] =
    useSendPasswordResetEmail(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
    console.log("Log in Successful");
    console.log(user);
  };

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
    const emailForResetPass = emailRef.current.value;
    if (emailForResetPass) {
      await sendPasswordResetEmail(emailForResetPass);
      toast.info("Reset Password Mail Sent", {
        theme: "colored",
      });
    } else {
      toast.error("Enter Email Address", {
        theme: "colored",
      });
    }
  };
  return (
    <div className="login-container">
      <h2 className="text-primary">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="email"
          name="email"
          id="email-login"
          placeholder="Enter Your Email"
          required
        />
        <br />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          id="password-login"
          placeholder="Enter Your Password"
          required
        />
        <br />
        <button className="btn btn-warning">Login</button>
      </form>
      <GoogleLogin></GoogleLogin>
      <p>
        Don't have account?{" "}
        <Link to="/register" onClick={navigateToLogin}>
          {" "}
          Register Here{" "}
        </Link>
        <button className="btn btn-link" onClick={handleResetPassword}>
          Reset Password
        </button>
      </p>
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
