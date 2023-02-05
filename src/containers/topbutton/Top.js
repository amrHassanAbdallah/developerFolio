import React from "react";
import "./Top.scss";
import {PopupButton} from "react-calendly";
import CalandlyButton from "../../components/calendlyButton/CalandlyButton";

export default function Top() {
  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("fixed-button").style.visibility = "visible";
    } else {
      document.getElementById("fixed-button").style.visibility = "hidden";
    }
  }
  window.onscroll = function () {
    scrollFunction();
  };
  window.onload = function () {
    scrollFunction();
  }; //To make sure that this button is not visible at starting.
  // When the user clicks on the button, scroll to the top of the document
  return (
      <div id="fixed-button">
        <button onClick={TopEvent} id="topButton" className="topButton" title="Go to top">
          <i className="fas fa-hand-point-up" aria-hidden="true"></i>
        </button>
       <CalandlyButton className={"topButton anotherButton"} href={"https://bit.ly/amrhassan-availability"} text={"Let's talk!"}></CalandlyButton>
      </div>

  );
}
