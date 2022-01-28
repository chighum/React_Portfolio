import React from "react";
import Background from "../components/About/Background";
import Coding from "../components/About/Coding";
import Hobbies from "../components/About/Hobbies";

function About() {
  React.useEffect(() => {
    document.title = "About";
  });
  return (
    <div>
      <h1>About Me</h1>
      <Background />
      <Coding />
      <Hobbies />
    </div>
  );
}

export default About;
