import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  cardsPerPage: 6,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPague, setCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;
