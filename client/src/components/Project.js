import React from "react";
import projects from "../data/ProjectData";
import "../styles/Project.css";
import { FaGithub } from "react-icons/fa";

// this will generate each individual project
function Project() {
  return (
    <div className="col-12">
      <div className="row">
        {projects.map((project) => {
          return (
            <div className="col-lg-6 col-md-12 mb-5" key={project.name}>
              <button
                type="button"
                className="btn shadow modalBtn"
                data-bs-toggle="modal"
                data-bs-target={project.id}
              >
                <div className="project-card" id={project.style_id}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="rounded-3 shadow project-image card-image"
                  ></img>
                  <div className="card-image-overlay">
                    <div className="card-image-overtop">
                      <img
                        className="card-image-overlay-icon rounded-circle"
                        src="./images/ClickMeIcon.png"
                        alt="Click Me Icon"
                        style={{ height: 75, width: 75 }}
                      ></img>
                    </div>
                    <div className="card-image-badge">
                      <img
                        className="card-image-overlay-icon rounded-circle"
                        src="./images/Certificate-badge.png"
                        alt="Full Stack Web Dev Certificate Icon"
                        style={{ height: 100, width: 100 }}
                      ></img>
                    </div>
                    <div className="card-title">
                      <h3>{project.space_name}</h3>
                    </div>
                  </div>
                </div>
              </button>
              <div
                className="modal fade"
                id={project.name}
                tabIndex="-1"
                aria-labelledby={project.name}
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title text-center" id={project.name}>
                        {project.space_name}
                      </h5>
                      <button
                        type="button"
                        className="btn-close btn-close-white"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <p>{project.description}</p>
                    </div>
                    <div className="modal-footer">
                      <a
                        href={project.deployed}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border rounded px-2 py-1 me-auto"
                      >
                        Deployed Application
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border rounded px-2 py-1"
                      >
                        Github Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <a
          href="https://github.com/chighum"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button p-2"
        >
          <span>
            <FaGithub size="30px" />
          </span>{" "}
          Github Profile
        </a>
      </div>
    </div>
  );
}

export default Project;
