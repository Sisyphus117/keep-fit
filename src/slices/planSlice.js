import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: "",
  startTime: "",
  duration: 0,
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    reset(state) {
      state.item = "";
      state.startTime = "";
      state.duration = 0;
    },
    set(state, action) {
      const { item, startDate, duration } = action.payload;
      state.item = item;
      state.startTime = new Date(startDate).toISOString();
      state.duration = +duration;
    },
  },
});

export const { reset, set } = planSlice.actions;
export default planSlice.reducer;
