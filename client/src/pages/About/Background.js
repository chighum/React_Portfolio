import React from "react";

let index = 0;
let images = [
  "./images/BroncosGame.JPG",
  "./images/Bailey.JPG",
  "./images/JimmyBuffet.JPG",
  "./images/MomAndMk.jpeg",
  "./images/Instructor.jpeg",
  "./images/YoungBull.JPG",
  "./images/SistersAtGraduation.JPG",
  "./images/SkiingWithTheBoys.JPG",
];

function rotateImage() {
  index++;
  if (index == images.length) {
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
    <div>
      <div className="row">
        <h1 className="mb-5">Background</h1>
        <div className="col-6 ps-5">
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
        <div className="col-6 pe-5">
          <img
            src="./images/MomAtTexas.jpeg"
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
