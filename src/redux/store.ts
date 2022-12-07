import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice";

const store = configureStore({
  reducer: {
    productReducer: productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
