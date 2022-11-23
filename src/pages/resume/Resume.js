import React, {useEffect} from "react";
import "./Resume.scss";

export default function Resume() {
    useEffect(() => {
        document.title = 'Amr Hassan | Resume';
    }, []);

  return (
      <div className="iframe-pdf">
        <iframe title="resume" src="./resume.pdf"></iframe>
      </div>
  );
}
