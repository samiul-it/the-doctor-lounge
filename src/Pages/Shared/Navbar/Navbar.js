import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      <div>
        <div className="nav-container">
          <div className="icon-container">
            <Link to="/home">
              <img src="" alt="nav-icon" srcset="" />
            </Link>
            <Link to="/home">
              <span className="title">The Doctor Lounge</span>
            </Link>
          </div>
          <div className="link-container">
            <Link to="/home">Home</Link>
            <Link to="/shop">Services</Link>
            <Link to="/track">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    );
};

export default Navbar;