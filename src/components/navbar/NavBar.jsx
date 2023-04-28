import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import SeekersLogo from "../../pictures/Seekers-Logo.png";
import "./Navbar.css";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import { useAuth } from "../LoginForm/AuthContext";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [alink, setALink] = useState("#fff");


  const [btnColor, setbtnColor] = useState("#333");
  const [btnBorderColor, setBtnBorderColor] = useState("2px solid #333");
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);


  useEffect(() => {
    if (window.location.pathname === "/listings") {
      setALink("#333");
      setbtnColor("#333");
      setBtnBorderColor("2px solid #333");
    }
  });

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setALink("#333");
      setbtnColor("#333");
      setBtnBorderColor("2px solid #333");
    }
  });

  const handleClick = () => {
    setClick(!click);
  };

  const returnHome = () => {
    window.location = "/";
  };

  return (
    <div className="navbar">
      <div className="container">

        <img
         alt="Seekers-logo"
          onClick={returnHome}
         src= {SeekersLogo}
         className="Seekers-logo"
        ></img>
        <div className={click ? "menu-container active" : "menu-container"}>
          <ul className="nav-menu">
          <a className="aLinks" href="/">
            Home 
          </a>
            <a className="aLinks" href="/News">
              News
            </a>
            <a className="aLinks" href="/" >
              Sell
            </a>
            <a className="aLinks" href="/" >
              Mortgage
            </a>
            <a className="aLinks" href="/" >
            Agents
            </a>
            <a className="aLinks" href="/Contact">
              Contact Us
            </a>
            <a
            className="aLinks"
            href="/login"
            style={{ border: `${btnBorderColor}`, textAlign: "center", justifyContent: "center", alignItems: "center" }}
          >
            Log In
          </a>
          <a
            className="aLink"
            href="/signup"
            style={{ border: `${btnBorderColor}`, whiteSpace:"nowrap", textAlign: "center", justifyContent: "center", alignItems: "center" }}
          >
            Sign Up
          </a>
          </ul>
        </div>
   
      </div>
    </div>
  );
};

export default NavBar;