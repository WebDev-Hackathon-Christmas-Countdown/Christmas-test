/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import "./CalendarDoors.css";
import Header from "./Header";
import Footer from "./Footer";
import data from "../assets/data";
import DoorCard from "./DoorCard";

function CalendarDoors() {
  return (
    <div className="calendar_doors">
      <Header className="header" />
      <div className="door-container">
        {data?.map((door) => (
          <DoorCard door={door} key={door.id} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default CalendarDoors;
