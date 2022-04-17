import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../../Firebase/firebase.init';
import Loading from './../../Loading/Loading';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);


    const emailRef = useRef("");
    const passwordRef = useRef("");
    const location=useLocation();
    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      
      signInWithEmailAndPassword(email,password);
      console.log("Log in Successful");
      console.log(user);
    };

    const navigateToLogin = () => {
      navigate("/login");
    };
    useEffect(()=>{
        if (user) {
          navigate(from, { replace: true });
        }

    },[user]);

    if (error) {
      return <h5 className="text-danger"> {error.message}</h5>;
    }
    if (loading) {
      return <Loading></Loading>;
    }
    return (
      <div>
        <h2 className='text-primary'>Login</h2>
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
          <button className="btn btn-warning">Register</button>
        </form>
        <p>
          Don't have account?{" "}
          <Link className="text-primary" to="/register" onClick={navigateToLogin}>
            {" "}
            Register Here{" "}
          </Link>
        </p>
      </div>
    );
};

export default Login;