import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Capabilities from "./capabilities/Capabilities";
import WorkExperience from "./workExperience/WorkExperience";
import Skills from "./skills/Skills";
import Blogs from "./blogs/Blogs";
import ClientFeedback from "./clientFeedback/ClientFeedback";
import Contact from "./contact/Contact";
import ScrollToTopButton from "./topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";
import {workExperiences} from "../portfolio";

const ROUTE_TO_SECTION_ID = {
  "/experience": "experience",
  "/skills": "skills",
  "/blogs": "blogs",
  "/contact": "contact"
};

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const location = useLocation();

  useEffect(() => {
    let targetId = location.pathname === "/" ? "greeting" : ROUTE_TO_SECTION_ID[location.pathname];
    let focusTarget = false;
    if (location.pathname === "/experience") {
      const parameters = new URLSearchParams(location.search);
      const caseStudy = workExperiences.experience.find(role => role.caseStudy && role.caseStudy.id === parameters.get("case"));
      const company = workExperiences.experience.find(role => role.id && role.id === parameters.get("company"));
      if (caseStudy) {
        targetId = `case-study-${caseStudy.caseStudy.id}`;
        focusTarget = true;
      } else if (company) {
        targetId = `experience-${company.id}`;
        focusTarget = true;
      }
    }
    if (!targetId) {
      return;
    }
    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }
    if (target.tagName === "DETAILS") target.open = true;
    if (focusTarget) {
      const focusElement = target.tagName === "DETAILS" ? target.querySelector("summary") : target;
      focusElement.focus({preventScroll: true});
    }
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (location.pathname === "/") {
      window.scrollTo({top: 0, behavior: prefersReducedMotion ? "auto" : "smooth"});
      return;
    }
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start"
    });
  }, [location.pathname, location.search, location.key]);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <Greeting />
        <Capabilities />
        <WorkExperience />
        <Skills />
        <Blogs />
        <ClientFeedback />
        <Contact />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
};

export default Main;
