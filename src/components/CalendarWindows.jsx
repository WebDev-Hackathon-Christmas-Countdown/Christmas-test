/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from "react-router-dom";
import "./CalendarWindows.scss";
import data from "../assets/data";
import WindowCard from "./WindowCard";
import DayNumber from "./DayNumber";
import Footer from "./Footer";

function CalendarWindows() {
  const nbrSnowflake = 3000;
  const dateDay = new Date().getDate();

  return (
    <div className="calendar_windows">
      {[...Array(nbrSnowflake)].map((e, i) => (
        <div className="snowflake" key={i} />
      ))}
      {data
        .slice(0, dateDay)
        .map((window) =>
          window.id % 3 === 0 ? (
            <WindowCard
              window={window}
              grid={`${(window.id / 3) * 2} / 6 / ${
                (window.id / 3) * 2 + 1
              } / 7`}
              key={window.id}
            />
          ) : (window.id + 1) % 3 === 0 ? (
            <WindowCard
              window={window}
              grid={`${((window.id + 1) / 3) * 2} / 4 / ${
                ((window.id + 1) / 3) * 2 + 1
              } / 5`}
              key={window.id}
            />
          ) : (
            <WindowCard
              window={window}
              grid={`${((window.id + 2) / 3) * 2} / 2 / ${
                ((window.id + 2) / 3) * 2 + 1
              } / 3`}
              key={window.id}
            />
          )
        )}
      <NavLink to="/" className="button-back">
        Back
      </NavLink>
      {data.map((day) =>
        day.id % 3 === 0 ? (
          <DayNumber
            dayId={day.id}
            grid={`${(day.id / 3) * 2 - 1} / 6 / ${(day.id / 3) * 2} / 7`}
            key={day.id}
          />
        ) : (day.id + 1) % 3 === 0 ? (
          <DayNumber
            dayId={day.id}
            grid={`${((day.id + 1) / 3) * 2 - 1} / 4 / ${
              ((day.id + 1) / 3) * 2
            } / 5`}
            key={day.id}
          />
        ) : (
          <DayNumber
            dayId={day.id}
            grid={`${((day.id + 2) / 3) * 2 - 1} / 2 / ${
              ((day.id + 2) / 3) * 2
            } / 3`}
            key={day.id}
          />
        )
      )}
      <Footer />
    </div>
  );
}

export default CalendarWindows;
