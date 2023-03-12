import React, { useState } from "react";
import { Link } from "react-router-dom";
import { handleLogout } from "../logout/Logout";

import "./navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleLogoutClick = () => {
    handleLogout();
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li
          className="signup-link"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Sign Up
          {showDropdown && (
            <div className="dropdown-menu">
              <Link to="/signup/student-athlete" className="dropdown-link">
                Student Athlete
              </Link>
              <Link to="/signup/coach" className="dropdown-link">
                Coach
              </Link>
            </div>
          )}
        </li>

        {isLoggedIn ? (
          <>
            <li>
              <Link to="/chat" className="nav-link">
                Chat
              </Link>
            </li>
            <li>
              <button onClick={handleLogoutClick} className="logout-btn">
                Logout
              </button>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
