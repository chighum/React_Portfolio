import React from "react";

function Resume() {
  React.useEffect(() => {
    document.title = "Resume";
  });
  return (
    <div>
      <div className="mb-2">
        <a
          href="./images/CodingResume.pdf"
          role="button"
          target="_blank"
          download
        >
          Download as PDF
        </a>
      </div>
      <div>
        <a
          href="./images/CodingResume.pdf"
          role="button"
          target="_blank"
          download
        >
          <img
            src="./images/CodingResume.png"
            alt="My Resume"
            style={{ height: 700 }}
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Resume;
