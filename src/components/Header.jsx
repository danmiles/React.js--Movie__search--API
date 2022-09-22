import React from "react";
import "../styles/header.css";
import logo from "/images/airbnb/air-bnb__logo.svg";

function header() {
  return (
    <div className="nav__color">
      <div className="container">
        <nav>
          <img src={logo} className="nav__logo" />
        </nav>
      </div>
    </div>
  );
}

export default header;
