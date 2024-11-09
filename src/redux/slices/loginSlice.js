import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  error: null,
  isAuthenticated: false,
};

const EMAIL_REGISTER = "admin2000@gmail.com";
const PASSWORD_REGISTER = "password123";

export const loginSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    loginHandler: (state, action) => {
      const { email, password } = action.payload;

      if (email === EMAIL_REGISTER && password === PASSWORD_REGISTER) {
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.error = "Неверный логин или пароль";
      }
    },

    logoutHandler: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { loginHandler, logoutHandler } = loginSlice.actions;
