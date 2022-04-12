import React from "react";
import Project from "../components/Project";

function Projects() {
  React.useEffect(() => {
    document.title = "Projects";
  });
  return (
    <div>
      <h1 className="mb-5">Projects</h1>
      <Project />
    </div>
  );
}

export default Projects;
