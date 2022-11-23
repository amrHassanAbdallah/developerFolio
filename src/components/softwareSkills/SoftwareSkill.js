import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
    return (
        <div>
            <div className="software-skills-main-div">
                <dev className="skills-listing">

                    {skillsSection.softwareSkills.map((skills, i) => {
                        return (
                            <dev key={i} className="newWrapper">
                                <div className="new">{skills.skillName}
                                    <span className="new-separator"></span>
                                    <span
                                        className="new-years_">{skills.experience}</span>
                                </div>
                            </dev>
                        );
                    })}
                </dev>

            </div>
        </div>
    );
}
