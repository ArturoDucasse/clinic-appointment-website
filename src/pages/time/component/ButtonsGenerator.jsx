import React from "react";
import TimeButton from "./timeButton";

const ButtonsGenerator = ({
  timeInterval,
  minuteInterval,
  maxSlot,
  makeAppointment,
}) => {
  return timeInterval.map((hour, index) => {
    return minuteInterval.map((minute, index2) => {
      return (
        <TimeButton
          hour={hour}
          minute={minute}
          maxSlot={maxSlot}
          id={index % index2}
          makeAppointment={makeAppointment}
        />
      );
    });
  });
};

export default ButtonsGenerator;
