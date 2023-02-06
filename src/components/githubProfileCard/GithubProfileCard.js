import React from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import emoji from "react-easy-emoji";
import {Fade} from "react-reveal";
import CalandlyButton from "../calendlyButton/CalandlyButton";

export default function GithubProfileCard({prof}) {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">Reach Out to me!</h1>
        <div className="row">
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
            </div>
            <h2 className="bio-text">"{emoji(String(prof.bio))}"</h2>
            <h4>
              Discover my schedule and book a face-to-face meeting with me
              instead of sending endless emails. Just click the "Book Meeting"
              button.
            </h4>
            <CalandlyButton
                className={"fixedButton"}
                href={"https://bit.ly/amrhassan-availability"}
                text={"Book Meeting"}
            ></CalandlyButton>
            <br />
            <br />

            <SocialMedia />
          </div>
          <div className="image-content-profile">
            <img
              src={prof.avatarUrl}
              alt={prof.name}
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
