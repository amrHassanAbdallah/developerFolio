import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  servicesSection,
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewService = servicesSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="/#/skills" onClick={() => scroll("skills")}>
                Skills
              </a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="/#/experience" onClick={() => scroll("experience")}>
                Work Experiences
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="/#/opensource" onClick={() => scroll("opensource")}>
                Open Source
              </a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a
                href={
                  "/#/" +
                  (achievementSection.menuTitle.toLocaleLowerCase() ||
                    "achievements")
                }
                onClick={() =>
                  scroll(
                    achievementSection.menuTitle.toLocaleLowerCase() ||
                      "achievements"
                  )
                }
              >
                {achievementSection.menuTitle || "Achievements"}
              </a>
            </li>
          )}
          {viewService && (
            <li>
              <a
                href={
                  "/#/" +
                  (servicesSection.menuTitle.toLocaleLowerCase() ||
                    "services")
                }
                onClick={() =>
                  scroll(
                    servicesSection.menuTitle.toLocaleLowerCase() ||
                      "services"
                  )
                }
              >
                {servicesSection.menuTitle || "Services"}
              </a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="/#/blogs" onClick={() => scroll("blogs")}>
                Blogs
              </a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks" onClick={() => scroll("talks")}>
                Talks
              </a>
            </li>
          )}
          <li>
            <a href="/#/contact" onClick={() => scroll("contact")}>
              Contact Me
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
const scroll = tag => {
  document.getElementById(tag).scrollIntoView({
    behavior: "smooth"
  });
};
export default Header;
