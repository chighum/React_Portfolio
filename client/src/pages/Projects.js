import React from "react";
import Project from "../components/Project";

function Projects() {
  React.useEffect(() => {
    document.title = "Projects";
  });
  return (
    <div className="container">
      <h2 className="mb-3 page-title">PROJECTS</h2>
      <Project />
    </div>
  );
}

export default Projects;
