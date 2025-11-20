import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: 0,
  height: 0,
  weight: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    init(state, action) {
      const { name, age, height, weight } = action.payload;
      state.name = name;
      state.age = age;
      state.height = height;
      state.weight = weight;
    },
  },
});

export const { init } = userSlice.actions;
export default userSlice.reducer;
