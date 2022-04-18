import React from 'react';
import './Footer.css';
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();
    return (
      <div className='footer'>
        <div className="footer-container">
          <div className="footer-text">
            <p>&copy; Samiul Islam Talukdar {year}</p>
          </div>
          <div className="footer-icons">
            <FaFacebook size="1.5em" />
            <FaLinkedinIn size="1.5em" />
            <FaGithub size="1.5em" />
          </div>
        </div>
      </div>
    );
};

export default Footer;