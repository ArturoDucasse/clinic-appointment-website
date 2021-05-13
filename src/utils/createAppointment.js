const createAppointment = (function () {
  let hours, minutes, seconds, year, month, day;
  let appointment = "";

  return {
    destructureTime: (pattern) => {
      hours = pattern.getHours();
      minutes = pattern.getMinutes();
      seconds = pattern.getSeconds();
    },

    destructureDate: (pattern) => {
      year = pattern.getFullYear();
      month = pattern.getMonth();
      day = pattern.getDate();
    },
    create: () => {
      appointment = new Date(year, month, day, hours, minutes, seconds);
      return appointment;
    },
  };
})();

export default createAppointment;
