import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dog: [],
  dogDetail: [],
};

export const dogSlice = createSlice({
  name: "dog",
  initialState,
  reducers: {
    getDog: (state, action) => {
      state.dog = action.payload;
    },
    getDogById: (state, action) => {
      state.dogDetail = action.payload;
    },
  },
});

export const { getDog, getDogById } = dogSlice.actions;
export default dogSlice.reducer;
