import React from "react";

function Resume() {
  React.useEffect(() => {
    document.title = "Resume";
  });
  return (
    <div>
      <h1>Here's my resume</h1>
    </div>
  );
}

export default Resume;
