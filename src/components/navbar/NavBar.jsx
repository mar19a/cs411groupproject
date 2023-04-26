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
  const [btnColor, setbtnColor] = useState("#fff");
  const [btnBorderColor, setBtnBorderColor] = useState("2px solid #fff");
  const { currentUser } = useAuth(); // <- Get the currentUser from the context

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
          src={SeekersLogo}
          className="Seekers-logo"
        ></img>
        <div className="icon" onClick={handleClick}>
          {click ? <FaRegTimesCircle /> : <HiOutlineMenuAlt4 />}
        </div>
        <div className={click ? "menu-container active" : "menu-container"}>
          <ul className="nav-menu">
            <a className="aLinks" href="/" style={{ color: `${alink}` }}>
              Home
            </a>
            <a className="aLinks" href="/News" style={{ color: `${alink}` }}>
              News
            </a>
            <a className="aLinks" href="/" style={{ color: `${alink}` }}>
              Sell
            </a>
            <a className="aLinks" href="/" style={{ color: `${alink}` }}>
              Mortgage
            </a>
            <a className="aLinks" href="/" style={{ color: `${alink}` }}>
              Real Estate Agents
            </a>
            <a className="aLinks" href="/Contact" style={{ color: `${alink}` }}>
              Contact Us
            </a>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;