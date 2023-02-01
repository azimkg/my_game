import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./gameSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import CategoriesSlice from "./CategoriesSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    category: CategoriesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);
