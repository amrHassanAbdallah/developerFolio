import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./Resume.scss";
import {socialMediaLinks} from "../../portfolio";
import {isPdf} from "../../lib/pdf";

export default function Resume() {
  const [status, setStatus] = useState("loading");
  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    const timeout = setTimeout(() => controller.abort(), 10000);
    fetch("/resume.pdf", {signal: controller.signal})
      .then(response => response.ok ? response.arrayBuffer() : null)
      .then(buffer => {
        if (active) setStatus(buffer && isPdf(new Uint8Array(buffer)) ? "ready" : "missing");
      })
      .catch(() => { if (active) setStatus("missing"); })
      .finally(() => clearTimeout(timeout));
    return () => { active = false; clearTimeout(timeout); controller.abort(); };
  }, []);
  useEffect(() => {
    document.title = "Amr Hassan | Resume";
    return () => {
      document.title = "Amr Hassan | Backend Engineer";
    };
  }, []);

  if (status === "loading") {
    return <div className="container resume-fallback"><h1>Résumé</h1><p role="status">Loading résumé…</p></div>;
  }

  if (status === "missing") {
    return (
      <div className="container resume-fallback">
        <h1>Résumé</h1>
        <p>For a copy of my current résumé, email me.</p>
        <a className="main-button" href={"mailto:" + socialMediaLinks.gmail}>
          {socialMediaLinks.gmail}
        </a>
        <Link to="/experience" className="resume-fallback-link">
          View experience
        </Link>
      </div>
    );
  }

  return (
    <div className="iframe-pdf">
      <iframe title="resume" src="./resume.pdf#toolbar=0"></iframe>
      <a href="/resume.pdf" download className="fixedButton downloadButton" title="Download PDF">
        Download PDF
      </a>
      <Link to="/" className="fixedButton topButton" title="Go to home">
        <i className="fas fa-home" aria-hidden="true"></i>
      </Link>
    </div>
  );
}
