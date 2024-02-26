import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Services from "./services/Services";

import Blogs from "./blogs/Blogs";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";
const waitTillElementLoaded = async (target) =>{
  for (let i = 0; i < 6; i++) {
    const element = document.getElementById(target);
    if (element) {
      console.log('The element exists.');
      break;
    } else {
      console.log('The element does not exist yet. Retrying in 1 second...');
      await new Promise(resolve => setTimeout(resolve, 80));
    }
  }
}
function waitForTime(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  useEffect(() => {
    let elements = window.location.href.split("/#/");
    let target = elements.length > 1 ? elements[1] : null;
    if (!isShowingSplashAnimation && target != null) {
      const cb = (target)=>{
        if (target === "availability"){
          document.querySelector("#availability button").click();
        }
      }
      scrollToTarget(target,cb);

    }
  }, [isShowingSplashAnimation]);

  const scrollToTarget = (tag,cb = null) => {
    waitTillElementLoaded(tag).then(()=>{
      document.getElementById(tag).scrollIntoView({
        behavior: "smooth", block: "center", inline: "nearest"
      });
      if (cb != null){
        waitForTime(40).then(
            cb(tag)
        )
      }
    })

  };

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            <StackProgress />
            <WorkExperience />
            <Education />
            <Projects />
            <StartupProject />
            <Achievement />
            <Services />
            <Blogs />
            <Talks />
            <Twitter />
            <Podcast />
            <Profile />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
