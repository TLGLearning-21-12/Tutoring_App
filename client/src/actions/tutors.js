import * as api from "../api";

export const getTutors = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTutors();
    dispatch({ type: "FETCH_ALL", payload: data });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const createTutor = (tutor) => async (dispatch) => {
  try {
    const { data } = await api.createTutor(tutor);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateTutor = (id, tutor) => async (dispatch) => {
  try {
    const { data } = await api.updateTutor(id, tutor);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
