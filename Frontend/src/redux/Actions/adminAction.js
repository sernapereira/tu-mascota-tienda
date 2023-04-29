import axios from "axios";
import { getAdmin } from "../slice/adminSlice";

const postAutenticacionAdmin = (user) => async (dispatch) => {
  try {
    const data = await axios.post("http://localhost:3002/dog", user);
    alert(data.data);
    return dispatch(getAdmin(data.data));
  } catch (error) {
    console.log({ error: error.message });
    alert(error);
  }
};

export { postAutenticacionAdmin };
