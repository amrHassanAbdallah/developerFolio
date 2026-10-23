import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences, education} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (!workExperiences.display) {
    return null;
  }
  return (
    <div className="container experience-container" id="experience">
      <h2 className="experience-heading section-heading">Experience</h2>
      <div className="experience-list">
        {workExperiences.experience.map(card => (
          <ExperienceCard key={card.company} isDark={isDark} cardInfo={card} />
        ))}
      </div>
      <p className="subTitle experience-education">{education.line}</p>
    </div>
  );
}
