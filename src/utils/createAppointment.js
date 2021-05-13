import axios from "./axios";

/**
 * @param {String} Appointment
 * @param {Int} userId
 */
const createAppointment = (Appointment, userId) => {
  axios.post("/appointments", {
    Appointment,
    users: [userId],
  });
};

export default createAppointment;
