import React from "react";
import logo from "../faviconio-logo/logo.png";
import "../styles/Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand ms-3" href="/">
          <img src={logo} alt="Logo I made on favicon.io" id="lightLogo"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav d-flex">
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
        </div>
      </div>
    </nav>
  );
}

export default Header;
