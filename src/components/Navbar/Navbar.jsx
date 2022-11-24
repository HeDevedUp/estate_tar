import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-scroll";

import "./Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const closeNav = () => setNav(nav);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div name="home" className={color ? "navbar navbar-bg" : "navbar"}>
      <div className="logo">
        <h4>CHISU</h4>
      </div>
      <ul className="nav-menu">
        <a href="/">
          <li>Home</li>
        </a>
        <Link to="/amenties" smooth={true} duration={500}>
          <li>Amenities</li>
        </Link>
        <Link to="/neighbourhood" smooth={true} duration={500}>
          <li>Neighbourhood</li>
        </Link>
        <Link to="/team" smooth={true} duration={500}>
          <li>The Team</li>
        </Link>
        <Link to="/residence" smooth={true} duration={500}>
          <li>My Residences</li>
        </Link>
      </ul>
      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className="icon" />
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className="icon" />
        )}
      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <a href="/">
            <li>Home</li>
          </a>
          <Link to="/amenities" smooth={true} duration={500} onClick={closeNav}>
            <li>Amenities</li>
          </Link>
          <Link to="/neighbourhood" smooth={true} duration={500} onClick={closeNav}>
            <li>Neighbourhood</li>
          </Link>
          <Link to="/team" smooth={true} duration={500} onClick={closeNav}>
            <li>The Team</li>
          </Link>
          <Link to="/residence" smooth={true} duration={500}>
            <li> My Residences</li>
          </Link>
        </ul>

        <div className="mobile-menu-bottom">
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
