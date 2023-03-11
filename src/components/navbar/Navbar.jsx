import React from "react";
import { Link } from "react-router-dom";

// logout function
const handleLogout = () => {
  localStorage.removeItem("username"); // clear the username from local storage
  localStorage.removeItem("password"); // clear the password from local storage
  window.location.reload(); // reload the app to go back to the login page
};

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
