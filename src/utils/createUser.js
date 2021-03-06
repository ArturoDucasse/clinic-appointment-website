import axios from "./axios";
import createAppointment from "./createAppointment";
import formatAppointment from "./formatAppointment";

/**
 * Adds user to the database
 * @param {String} identifier
 * The identifier can be either:
 * - Username
 * - Email
 * @param {Object} data
 */
const password = "test123"; //Todo!: Delete this, only for testing
const createUser = async (data) => {
  const { create: appointmentDate } = formatAppointment;
  await axios
    .post("auth/local/register", {
      ...data,
      password,
    })
    .then(
      ({
        data: {
          user: { id: userId },
        },
      }) => createAppointment(appointmentDate(), userId)
    )
    .catch((err) => console.log(err));
};

export default createUser;
