import React from "react";
import Project from "../components/Project";

function Projects() {
  React.useEffect(() => {
    document.title = "Projects";
  });
  return (
    <div className="row">
      <div className="ms-5 col-2 align-self-center">
        <p>
          Here you can find screenshots of some of my favorite projects that
          I've done in my short time as a full stack web developer. Most of
          these projects come from my time in the DU Full Stack Web Development
          Bootcamp which I just finished at the end of January. Simply click on
          the image to find out more about the project and get links to both the
          deployed live application and Github repository.
        </p>
      </div>
      <Project />
    </div>
  );
}

export default Projects;
