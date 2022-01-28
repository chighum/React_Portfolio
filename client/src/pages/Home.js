import React from "react";
import Modal from "../components/Modal";

function Home() {
  React.useEffect(() => {
    document.title = "Charlie Highum";
  });
  const landingModal = new bootstrap.Modal(
    document.getElementById("landingModal")
  );
  document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();
    landingModal.show();
  });
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#landingModal"
      >
        Launch static backdrop modal
      </button>
      <div
        className="modal fade"
        id="landingModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="landingModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="landingModalLabel">
                Welcome to my portfolio page!
              </h5>
            </div>
            <div className="modal-body">
              <img src="./images/logo.png" alt="Dark Logo"></img>
            </div>
            <div className="modal-footer">
              <nav className="navbar me-2">
                <div className="dropup">
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
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
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
                    <li>
                      <a className="dropdown-item" href="/hobbies">
                        Hobbies
                      </a>
                    </li>
                  </ul>
                </div>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
