import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dogs: [],
  dogDetail: [],
  post: [],
  filterDog: [],
  deletDog: [],
};

export const dogSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {
    getDog: (state, action) => {
      state.dogs = action.payload;
    },

    getDogById: (state, action) => {
      state.dogDetail = action.payload;
    },

    postDog: (state, action) => {
      state.post = action.payload;
    },

    filteredProducts: (state, action) => {
      state.filterDog = action.payload;
    },

    deleDogSlice: (state, action) => {
      state.deletDog = action.payload;
    },
  },
});

export const { getDog, getDogById, postDog, filteredProducts, deleDogSlice } =
  dogSlice.actions;
export default dogSlice.reducer;
