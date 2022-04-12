import React from "react";

let index = 0;
let images = [
  "./images/YoungBull.JPG",
  "./images/Cats.jpeg",
  "./images/CinqueTerre.JPG",
  "./images/PatagoniaLogo.JPG",
  "./images/Elephant.png",
];

function rotateImage() {
  index++;
  if (index === images.length) {
    index = 0;
  }
  document.getElementById("images").src = images[index];

  setTimeout(rotateImage, 5000);
}

function Background() {
  React.useEffect(() => {
    document.title = "Background";
  });
  window.onload = rotateImage;
  return (
    <div className="container-xxl">
      <h3 className="mb-3">Background</h3>
      <div className="row">
        <div className="col-md-6 mb-3">
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
            Growing up in Denver I have spent a large amount of my time outside.
            Whether I'm playing sports such as lacrosse, soccer, or football, or
            spending time in the mountains skiing, fishing, hiking, or camping,
            I still spend the majority of my time outdoors. I also love to get
            out of the state and travel the world when I can. Some of my
            favorite places I've traveled to around the world include Thailand,
            Patagonia, Tuscany, and New Zealand.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="./images/Elephant.png"
            alt="Photos of me with friends and family"
            className="rounded-3 shadow img-fluid"
            id="images"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Background;
