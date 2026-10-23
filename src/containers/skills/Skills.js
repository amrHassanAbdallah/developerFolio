import React from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {technicalExpertise} from "../../portfolio";

export default function Skills() {
  if (!technicalExpertise.display) {
    return null;
  }
  return (
    <div className="container" id="skills">
      <h2 className="skills-heading section-heading">{technicalExpertise.title}</h2>
      <p className="subTitle skills-description">{technicalExpertise.description}</p>
      <SoftwareSkill />
    </div>
  );
}
