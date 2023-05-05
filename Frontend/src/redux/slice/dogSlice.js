import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dogs: [],
  dogDetail: [],
  post: [],
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
  },
});

export const { getDog, getDogById, postDog } = dogSlice.actions;
export default dogSlice.reducer;
