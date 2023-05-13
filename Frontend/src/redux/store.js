import { configureStore } from "@reduxjs/toolkit";
import dogs from "./slice/dogSlice";
import admin from "./slice/adminSlice";
import pagination from "./slice/pageSlice";

const store = configureStore({
  reducer: {
    dogs: dogs,
    admin: admin,
    pagination: pagination,
  },
});

export default store;
