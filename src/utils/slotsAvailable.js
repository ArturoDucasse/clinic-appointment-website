const slotsAvailable = async (hour, minutes, appointments) => {
  let data = { counter: 0, match: false };

  appointments.map(({ Appointment }) => {
    const date = new Date(Appointment);

    if (date.getHours() === hour && date.getMinutes() === minutes) {
      data.counter++;
      data.match = true;
      console.log(
        `Appointment made ${date.getHours()}:${date.getMinutes()}, button ${hour}:${minutes} `
      );
      console.log(data.match, "match found");
    }
  });
  return data;
};

export default slotsAvailable;
