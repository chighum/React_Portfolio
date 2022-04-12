import React from "react";
import { FaFileDownload } from "react-icons/fa";
import "../styles/Resume.css";

function Resume() {
  React.useEffect(() => {
    document.title = "Resume";
  });
  return (
    <div>
      <a href="./images/CJH_Resume.pdf" role="button" target="_blank" download>
        <img
          id="resume"
          src="./images/CJH_Resume.png"
          alt="My Resume"
          style={{ height: 700 }}
        ></img>
        <span>
          <FaFileDownload />
        </span>
      </a>
    </div>
  );
}

export default Resume;
