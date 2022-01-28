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
            <div className="col-6 mb-5">
              <button
                type="button"
                className="btn shadow"
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
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title text-center"
                        id="exampleModalLabel"
                      >
                        {project.name}
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
                        className="text-decoration-none"
                      >
                        Deployed Application
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
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
