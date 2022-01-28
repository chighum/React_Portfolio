import React from "react";
import "../styles/Navigation.css";

function Navigation() {
  return (
    <nav className="navbar me-2">
      <a
        className="nav-link dropdown-toggle"
        href="/"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span>About Me</span>
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <a class="dropdown-item" href="/background">
            Background
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="/coding">
            Web Development
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="/hobbies">
            Hobbies
          </a>
        </li>
      </ul>
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
