import React from "react";
import "../../styles/Coding.css";

function Coding() {
  React.useEffect(() => {
    document.title = "Web Development";
  });
  return (
    <div className="container-fluid">
      <h3 className="mb-3">WEB DEVELOPMENT</h3>
      <div className="row">
        <div className="col-lg-6 mb-3 carousel-hover">
          <div
            id="carousel-indicators"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="./images/html.png"
                  alt="HTML5"
                  className="carousel-image"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="./images/css.png"
                  alt="CSS 3"
                  className="carousel-image"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="./images/javascript.png"
                  alt="Javascript"
                  className="carousel-image"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="./images/node-js.png"
                  alt="Node.js"
                  className="carousel-image"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="./images/react-js.png"
                  alt="React.js"
                  className="carousel-image"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="./images/mongodb.png"
                  alt="MongoDB"
                  className="carousel-image"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="./images/mongoose.png"
                  alt="mongoose"
                  className="mongoose img-fluid"
                ></img>
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="mongoose-caption">Mongoose</h1>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="./images/MySQL.png"
                  alt="MySQL"
                  className="carousel-image"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="./images/sequelize.png"
                  alt="sequelize"
                  className="carousel-image"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="./images/graphql.png"
                  alt="GraphQL"
                  className="carousel-image"
                ></img>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carousel-indicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carousel-indicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="carousel-label">
            <h5 className="mt-3">My preferred languages and technologies</h5>
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <p>
            While studying Petroleum Engineering at UT, I had very little
            exposure to programming aside from a few courses on R and Matlab.
            Although I struggled greatly in said courses, I also enjoyed them
            for the challenge they were. Then, while I was working as a ski
            instructor and trying to figure out what to do next, I kept thinking
            back to those courses and decided to further pursue programming
            through the Full Stack Web Development Bootcamp at the University of
            Denver.
          </p>
          <br />
          <p>
            I am very new to the web development world, but I quickly have come
            to appreciate and enjoy many different aspects. I first wanted to be
            an engineer because I loved problem solving. More than anything, I
            love the feeling of satisfaction when the problem is finally solved
            and you can move on to the next one. It turns out that web
            development has endless problems that need solving. Whether it be
            learning a new language or framework, building a new application or
            refactoring and debugging an existing one, the potential for growth
            is unlimited and riveting.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Coding;
