import { configureStore } from "@reduxjs/toolkit";
import dogSlice from "./slice/dogSlice";

const store = configureStore({
  reducer: {
    dogSlice: dogSlice,
  },
});

export default store;
