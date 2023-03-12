import React from "react";

import Navbar from "../../components/navbar/Navbar";
import "./home.css";

export default function HomePage() {
  return (
    <div className="home">
      <Navbar />
      <div className="ComponentContainer">
        <h1>Home Page</h1>
      </div>
    </div>
  );
}
