import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_GAME } from "../api/API";

export const productApi = createApi({
  reducerPath: "api/products",
  baseQuery: fetchBaseQuery({ baseURL: API_GAME }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "products",
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
