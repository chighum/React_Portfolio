import React from "react";
import "../styles/Navigation.css";

function Navigation() {
  return (
    <nav className="me-2">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a className="dropdown-item" href="/background">
              Background
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/coding">
              Web Development
            </a>
          </li>
          {/* <li>
          <a className="dropdown-item" href="/hobbies">
            Photos
          </a>
        </li> */}
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
      </div>
    </nav>
  );
}

export default Navigation;
