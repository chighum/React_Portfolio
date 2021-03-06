import React from "react";
import "../styles/Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiPhoneOutgoing, HiMail } from "react-icons/hi";

function Footer() {
  return (
    <footer className="navbar navbar-dark fixed-bottom">
      <a
        className="nav-link ms-5"
        href="https://github.com/chighum"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="span">
          <FaGithub size="30px" />
        </span>
      </a>
      <a
        className="nav-link"
        href="https://www.linkedin.com/in/charles-highum-8422b1130/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="span">
          <FaLinkedin size="30px" />
        </span>
      </a>
      <a className="nav-link" href="mailto:chighum41@gmail.com">
        <span className="span">
          <HiMail size="30px" />
        </span>
      </a>
      <a className="nav-link me-5" href="tel:1-303-775-6820">
        <span className="span">
          <HiPhoneOutgoing size="30px" />
        </span>
      </a>
    </footer>
  );
}

export default Footer;
