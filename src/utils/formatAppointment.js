/**
 * This tools formats the date and time to be submited to the database
 *
 *                              How to use:
 *
 * formatAppointment.destructureTime(date) - Set the values for the time
 *
 * formatAppointment.destructureDate(date) - Set the values for the date
 *
 * formatAppointment.create - Returns the created date
 */
const formatAppointment = (function () {
  let hours, minutes, seconds, year, month, day;
  let appointment;

  return {
    destructureTime: (pattern) => {
      hours = pattern.getHours();
      minutes = pattern.getMinutes();
      seconds = pattern.getSeconds();
      console.log(pattern, "Time submited - formatAppointment.js ");
    },

    destructureDate: (pattern) => {
      year = pattern.getFullYear();
      month = pattern.getMonth();
      day = pattern.getDate();
      console.log(pattern, "Date submited - formatAppointment.js ");
    },
    create: () => {
      appointment = new Date(year, month, day, hours, minutes, seconds);
      console.log(appointment, "Appointment made - formatAppointment.js");
      return appointment;
    },
  };
})();

export default formatAppointment;
