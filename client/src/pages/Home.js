import React from "react";
import Modal from "../components/Modal";

function Home() {
  React.useEffect(() => {
    document.title = "Charlie Highum";
  });

  return (
    <div>
      <h3>Welcome to my portfolio page!</h3>
      <div className="row">
        <div className="col-5 mx-5 align-self-center">
          <h5>
            My name is Charlie Highum, and I am a Full-Stack Web Developer in
            Denver, Colorado.
          </h5>
          <br />
          <h5>I love to find creative solutions to complex problems</h5>
          <br />
          <h5>
            I also love to learn new coding frameworks or entire languages.
          </h5>
          <br />
          <h5>
            Please feel free to learn more about me using the navigation bar at
            the top of the page.
          </h5>
          <br />
        </div>
        <div className="col-5 mx-5">
          <img
            src="./images/MeAndElephant.jpeg"
            alt="Photo of Me"
            className="img-fluid rounded-3 shadow"
          ></img>
        </div>
      </div>
      <h3>Thanks for stopping by!</h3>
    </div>
  );
}

export default Home;
