import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import SeekersLogo from "../../pictures/Seekers-Logo.png";
import "./Navbar.css";
import { useAuth } from "../LoginForm/AuthContext";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [alink, setALink] = useState("#fff");
  const { currentUser, setCurrentUser } = useAuth();
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const [btnColor, setbtnColor] = useState("#333");
  const [btnBorderColor, setBtnBorderColor] = useState("2px solid #333");



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

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    setShowDropDownMenu(false);
  };
  return (
    <div className="navbar">
      <div className="container">
        <img
          alt="Seekers-logo"
          onClick={returnHome}
          src={SeekersLogo}
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
            <a className="aLinks" href="/MarketInsights">
              Insights
            </a>
            <a className="aLinks" href="/Agents">
              Agents
            </a>
            <a className="aLinks" href="/Contact">
              Contact Us
            </a>
          </ul>
        </div>
        <div
          className="sign-in-container"
          onClick={() => setShowDropDownMenu(!showDropDownMenu)}
        >
          <FaUser className="sign-in-icon" style={{ color: `${btnColor}` }} />
          <span className="sign-in-text" style={{ color: `${btnColor}` }}>
            {currentUser ? currentUser : "Sign in"}
          </span>
          {showDropDownMenu && (
            <div className="dropdown-menu">
              {currentUser ? (
                <a className="dropdown-item" onClick={handleLogout}>
                  Log Out
                </a>
              ) : (
                <>
                  <a className="dropdown-item" href="/login">
                    Log In
                  </a>
                  <a className="dropdown-item" href="/signup">
                    Sign Up
                  </a>
                  </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;