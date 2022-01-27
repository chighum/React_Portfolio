import React from "react";
import "../styles/Navigation.css";

function Navigation() {
  return (
    <nav className="navbar">
      <a className="nav-link" href="/about">
        <span>About Me</span>
      </a>
      <a className="nav-link" href="/projects">
        <span>Projects</span>
      </a>
      <a className="nav-link" href="/contact">
        <span>Contact Me</span>
      </a>
      <a className="nav-link" href="/resume">
        <span>Resume</span>
      </a>
    </nav>
  );
}

export default Navigation;
