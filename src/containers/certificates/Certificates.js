import React from "react";
import "./Certificates.scss";
import {certificates} from "../../portfolio";

export default function Certificates() {
  if (certificates.display) {
    return (
      <div className="certificates-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">
{/*          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}*/}
        </div>
      </div>
    );
  }
  return null;
}
