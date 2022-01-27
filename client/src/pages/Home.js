import React from "react";

function Home() {
  React.useEffect(() => {
    document.title = "Charlie Highum";
  });
  return (
    <div>
      <h1>This is the Home Page</h1>
    </div>
  );
}

export default Home;
