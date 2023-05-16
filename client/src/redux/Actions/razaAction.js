import axios from "axios";
import { getRaza, postRazaCreate } from "../slice/razaSlice";

const postRazaAction = (data) => async (dispatch) => {
  try {
    const json = await axios.post(`/race`, data);
    console.log(json.data);
    return dispatch(postRazaCreate(json.data));
  } catch (error) {
    console.log({ error: error.message });
    alert(error);
  }
};

const getAllRace = () => async (dispatch) => {
  try {
    const json = await axios(`/race`);
    return dispatch(getRaza(json.data));
  } catch (error) {
    console.log({ error: error.message });
    alert(error);
  }
};

export { postRazaAction, getAllRace };
