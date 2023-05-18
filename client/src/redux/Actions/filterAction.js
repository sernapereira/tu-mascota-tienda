
import { filteredProducts } from "../slice/dogSlice";

const filterAllDogs = (filters) => {
    return (dispatch, getState) => {
      const { raza, genero, tamano } = filters;
  
      const dogs = getState().dogs.dogs;
  
      let filteredDogs = dogs;
  
      if (raza !== "") {
        filteredDogs = filteredDogs.filter((dog) => dog.raza === raza);
      }
  
      if (genero !== "") {
        filteredDogs = filteredDogs.filter((dog) => dog.genero === genero);
      }
  
      if (tamano !== "") {
        filteredDogs = filteredDogs.filter((dog) => dog.tamano === tamano);
      }
  
      dispatch(filteredProducts(filteredDogs));
    };
  };

  export  { filterAllDogs };
  
