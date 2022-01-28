import React from "react";
import Modal from "../components/Modal";

function Home() {
  React.useEffect(() => {
    document.title = "Charlie Highum";
  });

  return <Modal />;
}

export default Home;
