import axios from "axios";
export const BASE_URL = process.env.REACT_APP_BASE_URL;

/**
 *Setting the base URL for future requests
 */
const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
