import axios from "axios";
import { getDog, getDogById } from "../slice/dogSlice";

const getAllDog = () => async (dispatch) => {
  try {
    const json = await axios(`http://localhost:3002/dog`);
    console.log(json.data);
    return dispatch(getDog(json.data));
  } catch (error) {
    alert( error );
  }
};

export { getAllDog };
