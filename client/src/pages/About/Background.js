import React from "react";

function Background() {
  React.useEffect(() => {
    document.title = "Background";
  });
  return (
    <div>
      <h1>About Me</h1>
      <div className="row">
        <div className="col-5 mx-5 align-self-center">
          <h3>Background</h3>
          <p>
            I was born and raised in Denver, Colorado where I lived my entire
            life aside until moving to Austin, Texas to study at the University
            of Texas. While in Austin I enjoyed lots of live music and good
            food, and also managed to obtain a B.S. in Petroleum Engineering
            from the University of Texas along the way. After graduating, I
            moved to Vail, Colorado in order to be a ski instructor for a few
            years, and had the time of my life.
          </p>
          <br />
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
        <div className="col-5 mx-5">
          <h3>Photos of me/friends/family</h3>
        </div>
      </div>
    </div>
  );
}

export default Background;
