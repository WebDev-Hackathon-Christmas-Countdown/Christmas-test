/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import DailyCardPopUp from "./DailyCardPopUp";

function DoorCard(props) {
  const { door } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="door" onClick={toggleOpen} />
      <div className="backdoor" onClick={toggleOpen}>
        <span>{door.id}</span>
      </div>
      {isOpen && <DailyCardPopUp handleClose={toggleOpen} door={door} />}
    </div>
  );
}

export default DoorCard;
