import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="xl-nav">
        <div className="xl-nav-container">
          <div className="xl-nav-logo-container">
            <h4>Movies Dekho</h4>
          </div>
          <ul className="xl-nav-links-container">
            <li className="xl-li-navlink">
              <button className="btn login-btn">Log In</button>
            </li>
            <li className="xl-li-navlink">
              <button className="btn signup-btn">Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="sm-nav">
        <div className="sm-nav-container">
          <div className="sm-nav-logo-container">
            <h4>Movies Dekho</h4>
          </div>
          <div className="hamburger-container">
            <div className="hamburger-btn"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
