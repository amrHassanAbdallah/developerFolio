import React, {useContext} from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const {isDark} = useContext(StyleContext);
  const styleContext = useContext(StyleContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        aria-label="Toggle dark mode"
        checked={isDark}
        onChange={() => {
          styleContext.changeTheme();
        }}
      />
      <span className="slider round" aria-hidden="true">
        <span className="emoji">{isDark ? emoji("🌜") : emoji("☀️")}</span>
      </span>
    </label>
  );
};
export default ToggleSwitch;
