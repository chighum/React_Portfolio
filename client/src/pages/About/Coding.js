import React from "react";

function Coding() {
  React.useEffect(() => {
    document.title = "Web Development";
  });
  return (
    <div className="container-fluid">
      <h1 className="mb-5">Web Development</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src="./images/Technologies.png"
            alt="Technologies I know"
            className="rounded-3 shadow img-fluid"
          ></img>
        </div>
        <div className="col-md-6 align-self-center">
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
