/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import DailyCardPopUp from "./DailyCardPopUp";
import backWindowImg from "../assets/sample-popup.png";
import windowList from "../assets/windows-list-path";

function WindowCard(props) {
  const { window, grid } = props;
  const styleWindow = {
    backgroundImage: `url(${windowList[window.id]})`,
  };
  const styleBackWindow = {
    backgroundImage: `url(${backWindowImg})`,
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (event) => {
    if (
      event.target.className === "popup-box" ||
      event.target.className === "window" ||
      event.target.className === "back_window"
    ) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="window_container" style={{ gridArea: grid }}>
      <div className="window" style={styleWindow} onClick={toggleOpen} />
      <div
        className="back_window"
        style={styleBackWindow}
        onClick={toggleOpen}
      />
      {isOpen && <DailyCardPopUp handleClose={toggleOpen} window={window} />}
    </div>
  );
}

export default WindowCard;
