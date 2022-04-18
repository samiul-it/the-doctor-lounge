import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './GoogleLogin.css';
import auth from './../../../Firebase/firebase.init';
import Loading from '../../Loading/Loading';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";


const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate();

    const handleGoogleLogin=()=>{
        signInWithGoogle();

    }
    useEffect(() => {
      if (user) {
        navigate(from, { replace: true });
      }
    }, [user]);
    if(loading){
        return <Loading></Loading>;
    }
    

    if(error){
        console.log(error.message);
    }
    return (
      <div>
        <div className="google-login-btn">
          <button className="btn btn-success" onClick={handleGoogleLogin}>
            <FaGoogle size={"1.3em"}></FaGoogle> Login With Google
          </button>
        </div>
      </div>
    );
};

export default GoogleLogin;