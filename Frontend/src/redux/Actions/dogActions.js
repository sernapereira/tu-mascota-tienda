import axios from "axios";
import { getDog, getDogById, postDog } from "../slice/dogSlice";

const getAllDog = () => async (dispatch) => {
  try {
    const json = await axios(`/dog`);
    return dispatch(getDog(json.data));
  } catch (error) {
    console.log({ error: error.message });
    alert(error);
  }
};

const getDogByIdAction = (id) => async (dispatch) => {
  try {
    const json = await axios(`/dog/${id}`);

    return dispatch(getDogById(json.data));
  } catch (error) {
    console.log({ error: error.message });
    alert(error);
  }
};

const postDogAction = (data) => async (dispatch) => {
  try {
    const json = await axios.post(`/dog`, data);
   
    return dispatch(postDog(json.data));
  } catch (error) {
    console.log({ error: error.message });
    alert(error);
  }
};

export { getAllDog, getDogByIdAction, postDogAction };
