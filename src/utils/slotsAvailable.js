/**
 *
 * @param {Int} hour
 * @param {Int} minutes
 * @param {Array} appointments
 * @returns
 */
const slotsAvailable = (hour, minutes, appointments) => {
  let data = { counter: 0, match: false };

  appointments.forEach(({ Appointment }) => {
    const date = new Date(Appointment);

    if (date.getHours() === hour && date.getMinutes() === minutes) {
      data.counter++;
      data.match = true;
      console.log(
        `Match found, appointment value = ${date.getHours()}:${date.getMinutes()} / button value = ${hour}:${minutes} `
      );
      console.log(data.match, "match found");
    }
  });

  return data;
};

export default slotsAvailable;
