/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import "./DailyCardPopUp.css";

function DailyCardPopUp(props) {
  const [showAnswerClass, setShowAnswerClass] = useState(false);
  const showAnswer = () => {
    setShowAnswerClass(!showAnswerClass);
  };

  const { window, handleClose } = props;
  return (
    <div className="popup-box" onClick={handleClose}>
      <div className="popup-card">
        <img src={window.gif} alt="It's Christmas!" className="card-gif" />
        <div className="popup-card-title"> It's Christmas!!! </div>
        <div className="card-question">{window.question}</div>
        <div className={showAnswerClass ? "card-answer" : "hide-card-answer"}>
          {window.answer}
        </div>
        <input
          type="button"
          className={showAnswerClass ? "hide-answer-button" : "answer-button"}
          value="Know the answer!"
          onClick={showAnswer}
        />
        <iframe
          width="400"
          height="80"
          scrolling="no"
          allow="autoplay"
          src={window.song}
        />
      </div>
    </div>
  );
}

export default DailyCardPopUp;
