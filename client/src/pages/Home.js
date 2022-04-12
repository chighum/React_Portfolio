import React from "react";

function Home() {
  React.useEffect(() => {
    document.title = "Charlie Highum";
  });

  return (
    <div className="container">
      <h3 className="mb-3">Welcome!</h3>
      <div className="row">
        <div className="col-sm-12 col-lg-6 mb-3">
          <img
            src="./images/Elephant.png"
            alt="Elephant and me in Thailand"
            className="img-fluid rounded-circle shadow"
          ></img>
        </div>
        <div className="col-sm-12 col-lg-6 align-self-center text-start">
          <h5>
            My name is Charlie Highum, and I am a Full-Stack Web Developer in
            Denver, Colorado.
          </h5>
          <br />
          <h5>I love to find creative solutions to complex problems.</h5>
          <br />
          <h5>
            I also love to learn new coding frameworks or entire languages.
          </h5>
          <br />
          <h5>
            I'm glad you stopped by, and I hope you find something that sparks
            your interest. If so, please feel free to get in touch!
          </h5>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Home;
