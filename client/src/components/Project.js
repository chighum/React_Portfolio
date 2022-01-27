import React from "react";
import projects from "../data/ProjectData";

// this will generate each individual project
function Project() {
  return (
    <div>
      {projects.map((project) => {
        return (
          <div>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target={project.id}
            >
              <img src={project.image}></img>
            </button>

            <div
              class="modal fade"
              id={project.name}
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      {project.name}
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <p>{project.description}</p>
                  </div>
                  <div class="modal-footer">
                    <a href={project.deployed}>Deployed Application</a>
                    <a href={project.github}>Github Repository</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Project;
