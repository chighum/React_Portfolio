import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
      <Route exact path="/about">
        <Background />
      </Route>
      <Route exact path="/coding">
        <Coding />
      </Route>
      <Route exact path="/hobbies">
        <Hobbies />
      </Route>
      <div>
        <button type="button" className="btn btn-outline-dark">
          Previous Page
        </button>
        <button type="button" className="btn btn-outline-dark">
          Next Page
        </button>
      </div>
    </div>
  );
}

export default About;
