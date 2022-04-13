import React from "react";

function Home() {
  React.useEffect(() => {
    document.title = "Charlie Highum";
  });

  return (
    <div className="container">
      <h2 className="mb-3 page-title">WELCOME</h2>
      <div className="row">
        <div className="col-sm-12 col-lg-6 mb-3">
          <img
            src="./images/Elephant.png"
            alt="Elephant and me in Thailand"
            className="img-fluid rounded-circle shadow animated slideInDown"
          ></img>
        </div>
        <div className="col-sm-12 col-lg-6 align-self-center text-start">
          <p>
            My name is Charlie Highum, and I am a Full-Stack Web Developer in
            Denver, Colorado.
          </p>
          <br />
          <p>I love to find creative solutions to complex problems.</p>
          <br />
          <p>
            I also love to learn new coding frameworks or entire{" "}
            <a href="/coding" className="home-links">
              languages
            </a>
            .
          </p>
          <br />
          <p>
            You can use the navigation bar at the top to{" "}
            <a href="/background" className="home-links">
              learn more about me
            </a>{" "}
            and see some examples of{" "}
            <a href="/projects" className="home-links">
              my work
            </a>
            .
          </p>
          <br />
          <p>
            I'm glad you stopped by, and I hope you find something that sparks
            your interest. If so, please feel free to{" "}
            <a href="/contact" className="home-links">
              get in touch.
            </a>{" "}
            You can also click the icons on the bottom of the page for direct
            lines of contact!
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Home;
