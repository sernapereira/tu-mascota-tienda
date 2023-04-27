import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dogs: [],
  dogDetail: [],
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
  },
});

export const { getDog, getDogById } = dogSlice.actions;
export default dogSlice.reducer;
