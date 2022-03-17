import React from "react";
import projects from "../data/ProjectData";
import "../styles/Project.css";

// this will generate each individual project
function Project() {
  return (
    <div className="col-9">
      <div className="row">
        {projects.map((project) => {
          return (
            <div className="col-6 mb-5" key={project.name}>
              <button
                type="button"
                className="btn shadow modalBtn"
                data-bs-toggle="modal"
                data-bs-target={project.id}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  style={{ width: 500, height: 300 }}
                  className="rounded-3 shadow"
                ></img>
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
    </div>
  );
}

export default Project;
