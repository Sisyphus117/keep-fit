import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticated: true,
  id: 2,
  // authenticated: false,
  // id: -1,
};

const authenticateSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    login(state, actions) {
      state.authenticated = true;
      state.id = actions.payload;
    },
    logout(state) {
      state.authenticated = false;
      state.id = -1;
    },
  },
});

export const { login, logout } = authenticateSlice.actions;
export default authenticateSlice.reducer;
