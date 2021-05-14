import React, { useState } from "react";
import "./style.css";

const TimeButton = ({ hour, minute, maxSlot, makeAppointment }) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const onClick = () => {
    setButtonClicked(!buttonClicked); //This is not working for some reason
    makeAppointment(hour, minute);
    console.log("Button clicked");
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
