import React from "react";
import Navigation from "./Navigation";
import logo from "../faviconio-logo/logo.png";
import "../styles/Header.css";

function Header() {
  return (
    <header className="navbar fixed-top">
      <a className="nav-link" href="/">
        <img src={logo}></img>
      </a>
      <Navigation />
    </header>
  );
}

export default Header;
