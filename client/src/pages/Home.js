import React from "react";
import Modal from "../components/Modal";

function Home() {
  React.useEffect(() => {
    document.title = "Charlie Highum";
  });

  return (
    <div>
      <h3>Welcome to my portfolio page!</h3>
      <div className="col-5 mx-5 align-self-center">
        <h5>
          My name is Charlie Highum, and I am a Full-Stack Web Developer in
          Denver, Colorado.
        </h5>
        <br />
        <h5>
          I love to solve problems and learn new coding frameworks or entire
          languages.
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
          src="./images/IMG_1988.jpeg"
          alt="Photo of Me"
          style={{ width: 500, height: 300 }}
          className="rounded-3 shadow"
        ></img>
      </div>
      <h3>Thanks for stopping by!</h3>
    </div>
  );
}

export default Home;
