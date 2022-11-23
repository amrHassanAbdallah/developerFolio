import React from "react";
import "./Resume.scss";


export default function Resume() {
  return (
      <div className="iframe-pdf">
        <iframe title="resume" src="./resume.pdf"></iframe>
      </div>
  );
}
