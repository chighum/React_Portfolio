import React from "react";
import Project from "../components/Project";

function Projects() {
  React.useEffect(() => {
    document.title = "Projects";
  });
  return (
    <div>
      <h3 className="mb-3">Projects</h3>
      <Project />
    </div>
  );
}

export default Projects;
