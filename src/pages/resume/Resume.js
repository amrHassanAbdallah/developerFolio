import React, {useEffect} from "react";
import "./Resume.scss";

export default function Resume() {
  useEffect(() => {
    document.title = "Amr Hassan | Resume";
  }, []);

  return (
    <div className="iframe-pdf">
      <iframe title="resume" src="./resume.pdf#toolbar=0"></iframe>
      <a
          href="/"
          className="fixedButton topButton"
          title="Go to home"
      >
        <i className="fas  fa-home" aria-hidden="true"></i>
      </a>
    </div>
  );
}
