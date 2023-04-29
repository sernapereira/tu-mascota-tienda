import { configureStore } from "@reduxjs/toolkit";
import dogs from "./slice/dogSlice";
import admin from "./slice/adminSlice";

const store = configureStore({
  reducer: {
    dogs: dogs,
    admin: admin,
  },
});

export default store;
