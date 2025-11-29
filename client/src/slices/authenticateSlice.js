import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticated: true,
  id: 1,
  password: "root",
  avatar: "/default-user.jpg",
  // authenticated: false,
  // id: -1,
  // password: "",
  // avatar: "",
};

const authenticateSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    login(state, actions) {
      const { id, password, avatar } = actions.payload;
      state.authenticated = true;
      state.id = id;
      state.password = password;
      state.avatar = avatar;
    },
    logout(state) {
      state.authenticated = false;
      state.id = -1;
      state.password = "";
      state.avatar = "";
    },
    setAvatar(state, actions) {
      state.avatar = actions.payload;
    },
  },
});

export const { login, logout, setAvatar } = authenticateSlice.actions;
export default authenticateSlice.reducer;
