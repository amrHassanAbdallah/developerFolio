import React, {useContext, useState} from "react";
import Headroom from "react-headroom";
import {Link} from "react-router-dom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {greeting} from "../../portfolio";

const NAV_ITEMS = [
  {label: "Experience", to: "/experience"},
  {label: "Expertise", to: "/skills"},
  {label: "Writing", to: "/blogs"},
  {label: "Contact", to: "/contact"}
];

function Header() {
  const {isDark} = useContext(StyleContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.eyebrow}</span>
          <span className="grey-color">/&gt;</span>
        </Link>
        <button
          type="button"
          className="menu-icon"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </button>
        <ul
          className={isDark ? "dark-menu menu" : "menu"}
          data-open={isMenuOpen}
        >
          {NAV_ITEMS.map(item => (
            <li key={item.to}>
              <Link to={item.to} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <ToggleSwitch />
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
