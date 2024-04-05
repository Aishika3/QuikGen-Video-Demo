import React, { useState, useEffect } from "react";
import Home from "../Home/Home";
import Generate from "../Generate/Generate";
import CardTemplate from "../CardGrid/CardTemplate";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiMoon } from "react-icons/fi";

import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const Navbar = () => {
  const [theme, setTheme] = useState("light-theme");

  const ToggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSignout = (e) => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>QuirkGen</h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#generate">Generate</a>
            </li>
            <li>
              <a href="#card-body">Results</a>
            </li>
            {/* <li>
              <a href="#">Contact</a>
            </li> */}
            <li>
              <a href="#" onClick={(e) => handleSignout(e)}>
                Sign out
              </a>
            </li>
            <li>
              <a href="#" onClick={() => ToggleTheme()}>
                <FiMoon size={24} />
              </a>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <div className="hamburger-menu">
            <a
              className="hamburger"
              href="#"
              onClick={() => setShowMediaIcons(!showMediaIcons)}
            >
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;
