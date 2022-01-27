import React from "react";
import Project from "../components/Project";

function Projects() {
  React.useEffect(() => {
    document.title = "Resume";
  });
  return (
    <div>
      <h1>Projects Go Here</h1>
    </div>
  );
}

export default Projects;
