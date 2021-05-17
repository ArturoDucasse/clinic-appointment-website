import axios from "./axios";

const fetchAppointments = () => {
  return axios.get("/appointments").then(({ data }) => {
    return data;
  });
};

export default fetchAppointments;
