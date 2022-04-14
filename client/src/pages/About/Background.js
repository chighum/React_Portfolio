import React from "react";
import "../../styles/Background.css";

function Background() {
  React.useEffect(() => {
    document.title = "Background";
  });
  // window.onload = rotateImage;
  return (
    <div className="container-xxl">
      <h2 className="mb-3 page-title">BACKGROUND</h2>
      <div className="row">
        <div className="col-md-6 mb-3 align-self-center">
          <p>
            I was born and raised in Denver, Colorado where I lived my entire
            life until moving to Austin, Texas to study at the University of
            Texas. While in Austin I enjoyed lots of live music, good food, a
            perpetually over-hyped football team, and also managed to obtain a
            B.S. in Petroleum Engineering along the way. After graduating, I
            moved to Vail, Colorado in order to be a ski instructor for a few
            years, and had the time of my life.
          </p>
          <br />
          <p>
            Growing up in Denver I spent a large amount of my time outside.
            Whether I'm playing sports such as lacrosse, soccer, or football, or
            spending time in the mountains skiing, fishing, hiking, or camping,
            I still spend the majority of my time outdoors. I also love to get
            out of the state and travel the world when I can. Some of my
            favorite places I've traveled to around the world include Thailand,
            Patagonia, Tuscany, and New Zealand.
          </p>
        </div>
        <div className="col-md-6">
          <div
            id="carousel-indicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="./images/YoungBull.JPG"
                  alt="Me as a child"
                  className="carousel-image"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="./images/Cats.jpeg"
                  alt="My two cats"
                  className="carousel-image"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="./images/CinqueTerre.JPG"
                  alt="Cinque Terre, Italy"
                  className="carousel-image"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="./images/PatagoniaLogo.JPG"
                  alt="Cerro Chalten (Mount Fitz Roy), Argentina"
                  className="carousel-image"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="./images/Elephant.png"
                  alt="Me and an Elephant in Thailand"
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
        </div>
      </div>
    </div>
  );
}

export default Background;
