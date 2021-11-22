import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "2d85c265f5mshc430cfd3e4dc2e5p1890ccjsn0870c0f9b5bf",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({
  url: url,
  headers: {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "2d85c265f5mshc430cfd3e4dc2e5p1890ccjsn0870c0f9b5bf",
  },
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://coinranking1.p.rapidapi.com" }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
