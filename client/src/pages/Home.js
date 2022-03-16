import React from "react";
import Modal from "../components/Modal";

function Home() {
  React.useEffect(() => {
    document.title = "Charlie Highum";
  });

  return (
    <div>
      <h3>Welcome to my portfolio page!</h3>
      <h5>
        My name is Charlie Highum, and I am a Full-Stack Web Developer in
        Denver, Colorado. I love to solve problems and learn new coding
        frameworks or entire languages.
      </h5>
    </div>
  );
}

export default Home;
