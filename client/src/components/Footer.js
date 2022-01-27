import React from "react";
import "../styles/Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiPhoneOutgoing, HiMail } from "react-icons/hi";

function Footer() {
  return (
    <footer className="navbar fixed-bottom">
      <a
        className="nav-link"
        href="https://github.com/chighum"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <FaGithub size="40px" />
        </span>
      </a>
      <a
        className="nav-link"
        href="https://www.linkedin.com/in/charles-highum-8422b1130/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <FaLinkedin size="40px" />
        </span>
      </a>
      <a className="nav-link" href="mailto:chighum41@gmail.com">
        <span>
          <HiMail size="40px" />
        </span>
      </a>
      <a className="nav-link" href="tel:1-303-775-6820">
        <span>
          <HiPhoneOutgoing size="40px" />
        </span>
      </a>
    </footer>
  );
}

export default Footer;
