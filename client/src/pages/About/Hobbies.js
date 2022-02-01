import React from "react";

function Hobbies() {
  React.useEffect(() => {
    document.title = "Hobbies";
  });
  return (
    <div>
      <h1>About Me</h1>
      <div className="row">
        <div className="col-5 mx-5">
          <h3>Hobbies</h3>
          <p>
            Growing up in Denver I have spent a large amount of my time outside.
            Whether I'm playing sports such as lacrosse, soccer, or football, or
            spending time in the mountains fishing, hiking, or camping, I really
            still cannot get enough of the outdoors. While I love the summertime
            and doing all of those activities, for me nothing beats a crisp blue
            bird powder day spent skiing with friends and family.
          </p>
          <br />
          <p>
            While I am very grateful to live in Colorado and be able to go on
            all sorts of adventures when I please, I also love to get out of the
            state and travel the world when I can. Some of my favorite places
            I've traveled to around the world include Thailand, Patagonia,
            Tuscany, and New Zealand.
          </p>
        </div>
        <div className="col-5 mx-5">
          <h3>Skiing/traveling photos</h3>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
