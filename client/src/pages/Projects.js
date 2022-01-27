import React from "react";
import Project from "../components/Project";

function Projects() {
  React.useEffect(() => {
    document.title = "Projects";
  });
  return (
    <div className="container">
      <div className="row">
        <p className="col-3 text-center">
          To the right you can find screenshots of some of my favorite and
          proudest projects that I've done in my short time as a full stack web
          developer.
        </p>
        <Project />
      </div>
    </div>
  );
}

export default Projects;
