import React from "react";

function Navigation() {
  return (
    <nav className="navbar">
      <a className="nav-link" href="/about">
        About Me
      </a>
      <a className="nav-link" href="/projects">
        My Projects
      </a>
      <a className="nav-link" href="/contact">
        Contact Me
      </a>
      <a className="nav-link" href="/resume">
        Resume
      </a>
    </nav>
  );
}

export default Navigation;
