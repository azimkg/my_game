import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_GAME } from "../api/API";

export const productApi = createApi({
  reducerPath: "api/products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://jservice.io/api/clues",
  }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "",
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
