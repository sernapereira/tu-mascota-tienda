import axios from "axios";
import { getDog, getDogById, postDog } from "../slice/dogSlice";

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

const postDogAction = (data) => async (dispatch) => {
  try {
    const json = await axios.post(`http://localhost:3002/dog`, data);
    console.log(json.data);
    return dispatch(postDog(json.data));
  } catch (error) {
    console.log({ error: error.message });
    alert(error);
  }
};

export { getAllDog, getDogByIdAction, postDogAction };
