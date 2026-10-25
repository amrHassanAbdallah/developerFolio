import React from "react";
import "./SoftwareSkill.scss";
import {technicalExpertise} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className="skill-groups">
      {technicalExpertise.groups.map(group => (
        <div key={group.heading} className="skill-group">
          <h3 className="skill-group-heading">{group.heading}</h3>
          <p className="subTitle skill-group-items mono">
            {group.items.join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
}
