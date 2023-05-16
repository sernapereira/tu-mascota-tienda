// import { filteredProducts } from "../slice/dogSlice";

// const razaFilter = (raza, dogs) => {
//   const result = raza === "" ? dogs : dogs.filter((e) => e.raza === raza);
//   return result;
// };
// const generoFilter = (genero, productsFilteredRaza) => {
//   const result =
//     genero === ""
//       ? productsFilteredRaza
//       : productsFilteredRaza.filter((e) => e.genero === genero);
//   return result;
// };
// const tamañoFilter = (tamaño, productsFilteredGenero) => {
//   const result =
//     tamaño === ""
//       ? productsFilteredGenero
//       : productsFilteredGenero.filter((e) => e.tamaño === tamaño);
//   return result;
// };

// const filterAllDogs = (filters) => {
//   return async (dispatch, getState) => {
//     const { raza, genero, tamaño } = filters;

//     const dogs = getState().dogs.dogs;

//     const productsFilteredRaza = await razaFilter(raza, dogs);

//     const productsFilteredGenero = await generoFilter(
//       genero,
//       productsFilteredRaza
//     );
//     const productsFilteredTamaño = await tamañoFilter(
//       tamaño,
//       productsFilteredGenero
//     );

//     return dispatch(filteredProducts(productsFilteredTamaño));
//   };
// };
// export  { filterAllDogs };
import { filteredProducts } from "../slice/dogSlice";

const filterAllDogs = (filters) => {
    return (dispatch, getState) => {
      const { raza, genero, tamaño } = filters;
  
      const dogs = getState().dogs.dogs;
  
      let filteredDogs = dogs;
  
      if (raza !== "") {
        filteredDogs = filteredDogs.filter((dog) => dog.raza === raza);
      }
  
      if (genero !== "") {
        filteredDogs = filteredDogs.filter((dog) => dog.genero === genero);
      }
  
      if (tamaño !== "") {
        filteredDogs = filteredDogs.filter((dog) => dog.tamaño === tamaño);
      }
  
      dispatch(filteredProducts(filteredDogs));
    };
  };

  export  { filterAllDogs };
  
