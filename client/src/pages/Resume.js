import React from "react";
import { FaFileDownload } from "react-icons/fa";
import "../styles/Resume.css";

function Resume() {
  React.useEffect(() => {
    document.title = "Resume";
  });
  return (
    <div className="row justify-content-center">
      <div className="col-6 resume">
        <div id="resumeImg">
          <a
            href="./images/CJH_Resume.pdf"
            role="button"
            target="_blank"
            download
          >
            <img src="./images/CJH_Resume.png" alt="My Resume"></img>
            <span className="overlay">
              <FaFileDownload size="900px" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
