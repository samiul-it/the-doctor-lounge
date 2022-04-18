import React, { useRef } from "react";
import "./Signup.css";
import auth from "./../../../Firebase/firebase.init";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { async } from "@firebase/util";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});

  const [sendEmailVerification, sending] = useSendEmailVerification();  
  const emailRef = useRef("");
  const nameRef = useRef("");
  const passwordRef = useRef("");


  const nevigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email,password);
    console.log("User Created!");
    nevigate("/home");    
  };


  const navigateToLogin=()=>{
      nevigate("/login");
  }


  if(error){
      return <h5 className="text-danger"> {error.message}</h5>
  }
  if(loading){
      return <Loading></Loading>;
  }

  return (
    <div className="signup-conatiner">
      <h2 className="text-primary">Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
        />
        <br />
        <input
          ref={emailRef}
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          required
        />
        <br />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
          required
        />
        <br />
        <button className="btn btn-warning">Register</button>
      </form>
      <GoogleLogin></GoogleLogin>
      <p>
        Already have an account? <Link className="text-primary" to="/login" onClick={navigateToLogin}> Login </Link>
      </p>
    </div>
  );
};

export default Signup;
