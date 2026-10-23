import React from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";

export default function Contact() {
  return (
    <div className="container" id="contact">
      <h2 className="contact-title section-heading">{contactInfo.title}</h2>
      <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>
      <div className="contact-text-div">
        <a className="contact-detail-email" href={"mailto:" + contactInfo.email_address}>
          {contactInfo.email_address}
        </a>
        {contactInfo.meetingLink && (
          <div className="button-greeting-div-center">
            <a className="main-button" href={contactInfo.meetingLink} target="_blank" rel="noopener noreferrer">
              {contactInfo.meetingLinkText}
            </a>
          </div>
        )}
        <SocialMedia />
      </div>
    </div>
  );
}
