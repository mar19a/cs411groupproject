import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";


import "./Footer.css";

const Footer = () => {
  const returnHome = () => {
    window.location = "/";
  };
  return (
    <div className="footer">
      <div className="container">
        <div className="col">
          <a href="/">About</a>
          <a href="/">Bestimates</a>
          <a href="/">Mortgage</a>
          <a href="/">Planning</a>
          <a href="/">Advertise</a>
        </div>
      </div>
      <img
     
        height="100px"
        onClick={returnHome}
       
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
