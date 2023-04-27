import { configureStore } from "@reduxjs/toolkit";
import dogs from "./slice/dogSlice";

const store = configureStore({
  reducer: {
    dogs: dogs,
  },
});

export default store;
