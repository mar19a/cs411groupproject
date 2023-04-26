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
<<<<<<< HEAD
            {!currentUser && (
              <>
                <a
                  className="aLinks"
                  href="/signup"
                  style={{ color: `${alink}` }}
                >
                  Sign Up
                </a>
                <a
                  className="aLinks"
                  href="/login"
                  style={{ color: `${alink}` }}
                >
                  Login
                </a>
              </>
            )}
            {currentUser && <li className="aLinks">{currentUser}</li>}
=======
>>>>>>> 0b50184d5df87d293d697ff5067a1ac8ceade8d0
          </ul>
        </div>
        <button
            className="btn"
            style={{ color: `${btnColor}`, border: `${btnBorderColor}` }}
          >
            Log In
          </button>
          <button
            className="btn"
            style={{ color: `${btnColor}`, border: `${btnBorderColor}`, whiteSpace:"nowrap" }}
          >
            Sign Up
          </button>
      </div>
    </div>
  );
};

export default NavBar;