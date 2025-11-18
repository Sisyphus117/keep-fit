import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: "",
  startTime: "",
  duration: 0,
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    reset(state) {
      state.items = "";
      state.startTime = "";
      state.duration = 0;
    },
    set(state, action) {
      state.items = action.payload.items;
      state.startTime = action.payload.startTime;
      state.duration = action.payload.duration;
    },
  },
});

export const { reset, set } = planSlice.actions;
export default planSlice.reducer;
