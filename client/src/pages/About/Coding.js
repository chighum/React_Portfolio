import React from "react";

function Coding() {
  React.useEffect(() => {
    document.title = "Web Development";
  });
  return (
    <div>
      <h1>Web Development</h1>
      <div className="row">
        <div className="col-5 mx-5">
          <img
            src="./images/Technologies.png"
            alt="Technologies I know"
            style={{ width: 300, height: 250 }}
            className="rounded-3 shadow"
          ></img>
        </div>
        <div className="col-5 mx-5">
          <p>
            While I am very new to the web development world, I quickly have
            come to appreciate and enjoy many different aspects. I first wanted
            to be an engineer because I loved problem solving. More than
            anything, I love the feeling of satisfaction when the problem is
            finally solved and you can move on to the next one. It turns out
            that web development has endless problems that need solving. Whether
            it be learning a new language or framework, building a new
            application or refactoring and debugging an existing one, the
            potential for growth is unlimited and riveting.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Coding;
