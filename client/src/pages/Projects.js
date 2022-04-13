import React from "react";
import Project from "../components/Project";

function Projects() {
  React.useEffect(() => {
    document.title = "Projects";
  });
  return (
    <div className="container">
      <h3 className="mb-3">PROJECTS</h3>
      <Project />
    </div>
  );
}

export default Projects;
