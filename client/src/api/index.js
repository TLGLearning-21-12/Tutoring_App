import axios from "axios";

const url = "http://localhost:5000/tutors";

export const fetchTutors = () => axios.get(url);
export const createTutor = (newTutor) => axios.post(url, newTutor);
export const updateTutor = (id, updatedTutor) =>
  axios.patch(`${url}/${id}`, updatedTutor);
