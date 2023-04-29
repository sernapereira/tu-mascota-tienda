import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: [],
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    getAdmin: (state, action) => {
      state.admin = action.payload;
    },
  },
});

export const { getAdmin } = adminSlice.actions;
export default adminSlice.reducer;
