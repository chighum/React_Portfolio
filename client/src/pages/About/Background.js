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

  setTimeout(rotateImage, 3 * 1000);
}

function Background() {
  React.useEffect(() => {
    document.title = "Background";
  });
  window.onload = rotateImage;
  return (
    <div>
      <div className="row">
        <h1>Background</h1>
        <div className="col-3 mx-5 align-self-center">
          <p>
            I was born and raised in Denver, Colorado where I lived my entire
            life until moving to Austin, Texas to study at the University of
            Texas. While in Austin I enjoyed lots of live music, good food, a
            perpetually over-hyped football team, and also managed to obtain a
            B.S. in Petroleum Engineering along the way. After graduating, I
            moved to Vail, Colorado in order to be a ski instructor for a few
            years, and had the time of my life.
          </p>
        </div>
        <div className="col-3 mx-5">
          <img
            src="./images/Technologies.png"
            alt="Photos of me with friends and family"
            className="rounded-circle shadow img-fluid"
            id="images"
          ></img>
        </div>
        <div className="col-3 mx-5">
          <p>
            Growing up in Denver I have spent a large amount of my time outside.
            Whether I'm playing sports such as lacrosse, soccer, or football, or
            spending time in the mountains skiing, fishing, hiking, or camping,
            I still cannot get enough of the outdoors. I also love to get out of
            the state and travel the world when I can. Some of my favorite
            places I've traveled to around the world include Thailand,
            Patagonia, Tuscany, and New Zealand.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Background;
