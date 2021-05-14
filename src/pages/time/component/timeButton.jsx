import React, { useState } from "react";

const TimeButton = ({ hour, minute, maxSlot, makeAppointment }) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const onClick = () => {
    setButtonClicked(!buttonClicked);
    makeAppointment(hour, minute);
  };
  return (
    <div
      className={buttonClicked ? "button buttonClicked" : "button "}
      onClick={() => onClick()}
    >
      <span>{`${hour}:${minute} Uhr`}</span>{" "}
      <span> {`${maxSlot} Platze verfugbar`}</span>
      <span>{">"}</span>
    </div>
  );
};

export default TimeButton;
