import { configureStore } from "@reduxjs/toolkit";
import dogs from "./slice/dogSlice";
import admin from "./slice/adminSlice";
import pagination from "./slice/pageSlice";
import razaSlice from "./slice/razaSlice";

const store = configureStore({
  reducer: {
    dogs: dogs,
    razaSlice: razaSlice,
    admin: admin,
    pagination: pagination,
  },
});

export default store;
