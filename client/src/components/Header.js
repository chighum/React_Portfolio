import React from "react";
import logo from "../faviconio-logo/logo.png";
import { FaBars } from "react-icons/fa";
import "../styles/Header.css";

function Header() {
  return (
    <nav className="navbar navbar-dark navbar-expand-md fixed-top">
      <div className="container-fluid">
        <a className="nav-link px-3" href="/">
          <img src={logo} alt="Logo I made on favicon.io" id="lightLogo"></img>
        </a>
        <a
          className="navbar-toggler"
          data-bs-toggle="collapse"
          href="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-icon">
            <FaBars />
          </span>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav me-3">
            <div className="dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="span">About Me</span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/background">
                    <span className="span">Background</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/coding">
                    <span className="span">Web Development</span>
                  </a>
                </li>
                {/* <li>
                    <a className="dropdown-item" href="/hobbies">
                      Photos
                    </a>
                  </li> */}
              </ul>
            </div>
            <a className="nav-link" href="/projects">
              <span className="span">Projects</span>
            </a>
            <a className="nav-link" href="/contact">
              <span className="span">Contact Me</span>
            </a>
            <a className="nav-link" href="/resume">
              <span className="span">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
