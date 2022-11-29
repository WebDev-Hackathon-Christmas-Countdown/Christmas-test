/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./CountDown.css";
import videoBg from "../assets/Video/videobg.mp4";

function CountDown() {
  const [days, setDays] = useState(10);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(10);
  const countdown1 = () => {
    const endDate = new Date("December 25, 2022 00:00:00").getTime();
    const today = new Date().getTime();
    const timeDiff = endDate - today;
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    const timeDays = Math.floor(timeDiff / days);
    let timeHours = Math.floor((timeDiff % days) / hours);
    let timeMinutes = Math.floor((timeDiff % hours) / minutes);
    let timeSeconds = Math.floor((timeDiff % minutes) / seconds);
    timeHours = timeHours < 10 ? `0${timeHours}` : timeHours;
    timeMinutes = timeMinutes < 10 ? `0${timeMinutes}` : timeMinutes;
    timeSeconds = timeSeconds < 10 ? `0${timeSeconds}` : timeSeconds;
    setDays(timeDays);
    setHours(timeHours);
    setMinutes(timeMinutes);
    setSeconds(timeSeconds);
  };
  useEffect(() => {
    setInterval(countdown1, 1000);
  });
  return (
    <div>
      <div className="container">
        <video autoPlay loop muted playsInline src={videoBg} />
        <div className="title-countdown">
          <h3>There are only</h3>
        </div>
        <div className="countdown">
          <article className="article-countdown">
            <p>{days}</p>
            <h3>Days</h3>
          </article>
          <article className="article-countdown">
            <p>{hours}</p>
            <h3>Hours</h3>
          </article>
          <article className="article-countdown">
            <p>{minutes}</p>
            <h3>Minutes</h3>
          </article>
          <article className="article-countdown">
            <p>{seconds}</p>
            <h3>Seconds</h3>
          </article>
        </div>
        <div className="footer-countdown">
          <h3>until christmas!</h3>
        </div>
        <NavLink to="/calendar_windows" className="button-enter">
          Enter the Advent Calendar 2022
        </NavLink>
      </div>
    </div>
  );
}
export default CountDown;
