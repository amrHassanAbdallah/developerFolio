import React, {useContext} from "react";
import "./Resume.scss";


export default function Resume() {
  return (
      <div className="iframe-pdf">
        <iframe src="./resume.pdf"  ></iframe>
      </div>
  );
}
