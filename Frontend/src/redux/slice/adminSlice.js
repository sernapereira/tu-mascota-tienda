import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: [],
  autenticacion: false
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    getAdmin: (state, action) => {
      state.admin = action.payload;
    },
    getAutenticacion: (state, action) => {
      state.autenticacion = action.payload;
    
    },
  },
});

export const { getAdmin, getAutenticacion } = adminSlice.actions;
export default adminSlice.reducer;
