import React, { useState } from "react";
import { Link } from "react-router-dom";
import { handleLogout } from "../logout/Logout";

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
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <div
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button>Sign Up</button>
          {showDropdown && (
            <div className="dropdown-menu">
              <Link to="/signup/student-athlete">Student Athlete</Link>
              <Link to="/signup/coach">Coach</Link>
            </div>
          )}
        </div>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <button onClick={handleLogoutClick}>Logout</button>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
