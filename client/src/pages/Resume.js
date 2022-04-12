import React from "react";
import "../styles/Resume.css";

function Resume() {
  React.useEffect(() => {
    document.title = "Resume";
  });
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-sm-10 col-md-8 col-lg-6 resume">
          <div id="resumeImg">
            <a
              href="./images/CJH_Resume.pdf"
              role="button"
              target="_blank"
              download
            >
              <div className="card">
                <img
                  className="img-fluid card-img"
                  src="./images/CJH_Resume.png"
                  alt="My Resume"
                ></img>
                <div>
                  <img
                    className="img-fluid card-img-overlay"
                    src="./images/download-pdf.png"
                    alt="Download Icon"
                  ></img>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
