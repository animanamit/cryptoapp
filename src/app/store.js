import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/crypto-api";
import { usersApi } from "../services/test-api";

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
});
