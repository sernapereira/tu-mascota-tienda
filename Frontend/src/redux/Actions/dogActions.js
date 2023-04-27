import axios from "axios";
import { getDog, getDogById } from "../slice/dogSlice";

const getAllDog = () => async (dispatch) => {
  try {
    const json = await axios(`http://localhost:3002/dog`);
    return dispatch(getDog(json.data));
  } catch (error) {
    console.log({ error: error.message });
    alert(error);
  }
};

const getDogByIdAction = (id) => async (dispatch) => {
  try {
    const json = await axios(`http://localhost:3002/dog/${id}`);
 
    return dispatch(getDogById(json.data));
  } catch (error) {
    console.log({ error: error.message });
    alert(error);
  }
};

export { getAllDog, getDogByIdAction };
