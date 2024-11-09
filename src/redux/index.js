import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slices/loginSlice";
import { colimsSlice } from "./slices/columsSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    colums: colimsSlice.reducer,
  },
});
