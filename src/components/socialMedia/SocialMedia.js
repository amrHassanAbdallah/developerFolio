import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

export default function SocialMedia() {
  if (!socialMediaLinks.display) return null;
  const links = [
    {
      label: "Amr Hassan on GitHub",
      href: socialMediaLinks.github,
      style: "github",
      icon: "fab fa-github"
    },
    {
      label: "Amr Hassan on LinkedIn",
      href: socialMediaLinks.linkedin,
      style: "linkedin",
      icon: "fab fa-linkedin-in"
    },
    {
      label: "Email Amr Hassan",
      href: socialMediaLinks.gmail && `mailto:${socialMediaLinks.gmail}`,
      style: "google",
      icon: "fas fa-envelope"
    }
  ];
  return (
    <div className="social-media-div">
      {links
        .filter(link => link.href)
        .map(link => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            className={`icon-button ${link.style}`}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
          >
            <i className={link.icon} aria-hidden="true"></i>
          </a>
        ))}
    </div>
  );
}
