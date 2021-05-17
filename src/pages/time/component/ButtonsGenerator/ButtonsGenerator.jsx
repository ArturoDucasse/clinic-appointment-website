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
  const [slots, setSlots] = useState(maxSlot);
  const [appointments, setAppointments] = useState([]);
  const [takenSlots, setTakenSlots] = useState(0);

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
    let temp = false;
    return minuteInterval.map((minute) => {
      slotsAvailable(hour, Number(minute), appointments).then(
        ({ counter, match }) => {
          if (match) setTakenSlots(counter);
          if (!match && temp) setTakenSlots(0);
        }
      );
      return (
        <TimeButton
          hour={hour}
          minute={minute}
          maxSlot={slots - takenSlots}
          makeAppointment={makeAppointment}
          key={uniqid()}
        />
      );
    });
  });
};

export default ButtonsGenerator;
