import React from "react";
import {Link} from "react-router-dom";
import "./Greeting.scss";
import {greeting, socialMediaLinks} from "../../portfolio";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="greet-main container" id="greeting">
      <div className="greeting-graphic" aria-hidden="true"></div>
      <p className="greeting-eyebrow mono">{greeting.eyebrow}</p>
      <h1 className="greeting-text">{greeting.headline}</h1>
      <p className="subTitle greeting-text-p">{greeting.description}</p>
      <div className="button-greeting-div">
        {greeting.actions.map((action, index) => (
          <a key={action.href} className={index === 0 ? "main-button" : "main-button greeting-secondary-action"} href={action.href}>
            {action.text}
          </a>
        ))}
      </div>
      <Link className="greeting-featured-work" to={greeting.featuredWork.to}>
        {greeting.featuredWork.text} <span aria-hidden="true">→</span>
      </Link>
      <div className="greeting-quiet-links">
        {socialMediaLinks.github && (
          <a
            href={socialMediaLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {socialMediaLinks.linkedin && (
          <a
            href={socialMediaLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}
