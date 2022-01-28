import React from "react";

function Background() {
  React.useEffect(() => {
    document.title = "Background";
  });
  return (
    <div>
      <h1>About Me</h1>
      <div className="row">
        <div className="col-5 mx-5">
          <h3>Background</h3>
          <p>
            I was born and raised in Denver, Colorado. I grew up in Denver with
            a total of seven siblings so there was never a dull moment in our
            household. We were all very competitive with one another growing up,
            pusing each other to the very limit and sometimes over the edge.
            have lived here my entire life aside from a four year stint in
            Austin, Texas. While in Austin I enjoyed lots of live music and good
            food, and also managed to obtain a B.S. in Petroleum Engineering
            from the University of Texas along the way.
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
