import React from "react";
import TimeButton from "./timeButton";
import uniqid from "uniqid";

const ButtonsGenerator = ({
  timeInterval,
  minuteInterval,
  maxSlot,
  makeAppointment,
}) => {
  return timeInterval.map((hour) => {
    return minuteInterval.map((minute) => {
      return (
        <TimeButton
          hour={hour}
          minute={minute}
          maxSlot={maxSlot}
          makeAppointment={makeAppointment}
          key={uniqid()}
        />
      );
    });
  });
};

export default ButtonsGenerator;
