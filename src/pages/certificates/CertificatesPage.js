import React, {useEffect, useState} from "react";
import Header from "../../components/header/Header";

import ScrollToTopButton from "../../containers/topbutton/Top";
import SplashScreen from "../../containers/splashScreen/SplashScreen";
import {splashScreen} from "../../portfolio";
import {StyleProvider} from "../../contexts/StyleContext";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import "./CertificatesPage.scss";
import Certificates from "../../containers/certificates/Certificates";

const CertificatesPage = () => {
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
    let elements = window.location.href.split("/#/")
    let target = elements.length > 1 ? elements[1]:null
    if(!isShowingSplashAnimation && target != null){
      scrollToTarget(target);
    }
  },[isShowingSplashAnimation])

  const scrollToTarget = (tag) => {
    setTimeout(() => {
      let target =  document.getElementById(tag)
      if (target){
        target.scrollIntoView({
          behavior: "smooth",
        });
      }

    }, 100);
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
            <Certificates />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default CertificatesPage;
