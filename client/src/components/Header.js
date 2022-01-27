import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="navbar">
      <a className="nav-link" href="/">
        Add Logo Here
      </a>
      <Navigation />
    </header>
  );
}

export default Header;
