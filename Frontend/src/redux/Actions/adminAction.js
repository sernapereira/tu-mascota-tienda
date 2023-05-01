import axios from "axios";
import { getAdmin, getAutenticacion } from "../slice/adminSlice";




const postAutenticacionAdmin = (user) => async (dispatch) => {
  try {
    const data = await axios.post("http://localhost:3002/admin", user);
    return dispatch(getAdmin(data.data));
  } catch (error) {
    console.log({ error: error.message });
    alert(error);
  }
};

const autenticacion2 = (data) => async (dispatch) => {
  try {
    const acceso = data ? true : false
 
    return dispatch(getAutenticacion(acceso));
  } catch (error) {
    console.log({ error: error.message });
    alert(error);
  }
};
export { postAutenticacionAdmin, autenticacion2 };
