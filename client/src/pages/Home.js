import React from "react";
import {
  Transition,
  CSSTransition,
  SwitchTransition,
} from "react-transition-group";

function Home() {
  React.useEffect(() => {
    document.title = "Charlie Highum";
  });
  return (
    <div>
      <h1>This is the Home Page</h1>
    </div>
  );
}

export default Home;
