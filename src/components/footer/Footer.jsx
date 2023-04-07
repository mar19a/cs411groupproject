import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import Logo from "../..//pictures/Seekers-Logo.png";

import "./Footer.css";

const Footer = () => {
  const returnHome = () => {
    window.location = "/";
  };
  return (
    <div className="footer">
      <div className="container">
        <div className="col">
          
        </div>
      </div>
      <img
        alt="logo"
        src={Logo}
        height="100px"
        onClick={returnHome}
        className="Seekers-Logo"
      />
      <div className="social">
        <FaFacebookSquare />
        <FaInstagram />
        <FaTwitter />
        <FaPinterest />
      </div>
      <img
  
        type="image/svg+xml"
        alt="Footer art"
        focusable="false"
        height="auto"
        width="90%"
      ></img>
    </div>
  );
};

export default Footer;
