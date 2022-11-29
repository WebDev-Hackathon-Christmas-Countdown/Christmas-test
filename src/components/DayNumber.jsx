/* eslint-disable react/prop-types */
import React from "react";

function DayNumber(props) {
  const { dayId, grid } = props;
  return (
    <div className="number_day_container" style={{ gridArea: grid }}>
      <div className="number_day">{dayId}</div>
    </div>
  );
}

export default DayNumber;
