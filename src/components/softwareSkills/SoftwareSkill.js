import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <div className="skills-listing">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <div key={i} className="newWrapper">
                <div className="new">
                  {skills.skillName}
                  <span className="new-separator"></span>
                  <span className="new-years_">{skills.experience}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
