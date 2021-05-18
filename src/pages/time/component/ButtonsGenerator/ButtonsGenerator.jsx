import React, { useEffect, useState } from "react";
import TimeButton from "../timeButton/timeButton";
import uniqid from "uniqid";
import fetchAppointments from "../../../../utils/fetchAppointments";
import slotsAvailable from "../../../../utils/slotsAvailable";

const ButtonsGenerator = ({
  timeInterval,
  minuteInterval,
  maxSlot,
  makeAppointment,
}) => {
  const [appointments, setAppointments] = useState([]);

  //Fetch appointments
  //Filter appointments that match the hour, minute in the iteration
  // Return the amount of matches
  //Set the slots to be equal the number of matches minus the maxSlots

  useEffect(() => {
    const appointmentsArray = async () => {
      const appointmentsMade = await fetchAppointments();
      setAppointments(appointmentsMade);
    };

    appointmentsArray();
  }, []);

  return timeInterval.map((hour) => {
    return minuteInterval.map((minute) => {
      let takenSlots = 0;
      const { counter, match } = slotsAvailable(
        hour,
        Number(minute),
        appointments
      );

      if (match) {
        takenSlots = counter;
        console.log(match, "match");
      }

      return (
        <TimeButton
          hour={hour}
          minute={minute}
          maxSlot={maxSlot - takenSlots}
          makeAppointment={makeAppointment}
          key={uniqid()}
        />
      );
    });
  });
};

export default ButtonsGenerator;
