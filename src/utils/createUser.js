import axios from "./axios";

/**
 * Adds user to the database
 * @param {String} identifier
 * The identifier can be either:
 * - Username
 * - Email
 * @param {Object} data
 */
const createUser = (identifier, data) => {
  axios.post("auth/local", {
    identifier: identifier,
    ...data,
  });
};

export default createUser;
