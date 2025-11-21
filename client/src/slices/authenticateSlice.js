import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticated: true,
};

const authenticateSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    login(state) {
      state.authenticated = true;
    },
    logout(state) {
      state.authenticated = false;
    },
  },
});

export const { login, logout } = authenticateSlice.actions;
export default authenticateSlice.reducer;
