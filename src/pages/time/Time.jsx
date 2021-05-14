import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

import "./style.css";
import {
  morgenHours,
  mittagsHours,
  abendsHours,
  minutesIntervals,
  maxSlot,
} from "../../utils/times";
import ButtonsGenerator from "./component/ButtonsGenerator/ButtonsGenerator";
import formatAppointment from "../../utils/formatAppointment";

const Time = () => {
  const [appointment, setAppointment] = useState("");

  const makeAppointment = (hour, minute) => {
    setAppointment(new Date(0, 0, 0, hour, minute));
    console.log("appointmet call");
  };

  const submitAppointment = () => {
    formatAppointment.destructureTime(appointment);
    console.log(`Appointment formated (${appointment}) - Time.jsx/line-24`);
  };

  return (
    <>
      <h1>Wahlen sie die Uhrzeit aus:</h1>
      <div className="inlineDiv" />
      <div className="container_time">
        <div className="Morgens" style={{ width: "350px" }}>
          <h2>Morgens</h2>
          <div className="times_container">
            <ButtonsGenerator
              timeInterval={morgenHours}
              minuteInterval={minutesIntervals}
              maxSlot={maxSlot}
              makeAppointment={makeAppointment}
            />
          </div>
        </div>
        <div className="Mittags " style={{ width: "350px" }}>
          <h2>Mittags</h2>
          <div className="times_container">
            <ButtonsGenerator
              timeInterval={mittagsHours}
              minuteInterval={minutesIntervals}
              maxSlot={maxSlot}
              makeAppointment={makeAppointment}
            />
          </div>
        </div>
        <div className="Abends" style={{ width: "350px" }}>
          <h2>Abends</h2>
          <div className="times_container">
            <ButtonsGenerator
              timeInterval={abendsHours}
              minuteInterval={minutesIntervals}
              maxSlot={maxSlot}
              makeAppointment={makeAppointment}
            />
          </div>
        </div>
      </div>
      <div className="_button" style={{ marginTop: "50px" }}>
        <Link to="./userInfo" style={{ color: "white" }}>
          <Button positive size="large" onClick={submitAppointment}>
            Weiter zur Registration
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Time;
