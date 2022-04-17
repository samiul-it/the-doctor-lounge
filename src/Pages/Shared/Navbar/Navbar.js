import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuthState } from "react-firebase-hooks/auth";
import {signOut} from "firebase/auth";
import auth from './../../../Firebase/firebase.init';
import Loading from '../../Loading/Loading';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut=()=>{
    if(loading){
      <Loading></Loading>
    }
    signOut(auth);
    
  }
  
    return (
      <div>
        <div className="nav-container">
          <div className="icon-container">
            <Link to="/home">
              {/* <img src="" alt="nav-icon" srcset="" /> */}
            </Link>
            <Link to="/home">
              <span className="title">The Doctor Lounge</span>
            </Link>
          </div>
          <div className="link-container">
            <Link to="/home">Home</Link>
            <Link to="/home">Services</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>

            {user ? (
              <Link to={"/home"} onClick={handleSignOut}>
                Sign Out
              </Link>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;