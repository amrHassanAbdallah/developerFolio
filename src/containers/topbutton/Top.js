import React, {useEffect, useState} from "react";
import "./Top.scss";

export default function Top() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  // When the user clicks on the button, scroll to the top of the document
  return (
    <div id="fixed-button">
      <button
        onClick={TopEvent}
        id="topButton"
        className="fixedButton topButton"
        title="Go to top"
        style={{visibility: visible ? "visible" : "hidden"}}
      >
        <i className="fas fa-hand-point-up" aria-hidden="true"></i>
      </button>
    </div>
  );
}
