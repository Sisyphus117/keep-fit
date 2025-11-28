import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: 0,
  height: 0,
  weight: 0,
  bmr: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    init(state, action) {
      //init data,no junk
      Object.assign(state, action.payload);
    },
    update(state, action) {
      //defensive
      // const { name, age, height, weight } = action.payload;
      // if (name !== undefined) state.name = name;
      // if (age !== undefined) state.age = age;
      // if (height !== undefined) state.height = height;
      // if (weight !== undefined) state.weight = weight;
      //test
      Object.assign(state, action.payload);
    },
  },
});

export const { init, update } = userSlice.actions;
export default userSlice.reducer;
