import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  raza: [],
  postRaza: [],
};

export const razaSlice = createSlice({
  name: "raza",
  initialState,
  reducers: {
    getRaza: (state, action) => {
      state.raza = action.payload;
    },

    postRazaCreate: (state, action) => {
      state.postRaza = action.payload;
    },
  },
});

export const { getRaza, postRazaCreate } = razaSlice.actions;
export default razaSlice.reducer;
