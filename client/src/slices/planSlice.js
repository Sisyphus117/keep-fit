import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEmpty: true,
  item: "",
  startDate: "",
  duration: 0,
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    reset(state) {
      state.isEmpty = true;
      state.item = "";
      state.startDate = "";
      state.duration = 0;
    },
    set(state, action) {
      const { item, startDate, duration } = action.payload;
      state.item = item;
      state.startDate = startDate;
      state.duration = +duration;
      state.isEmpty = false;
    },
  },
});

export const { reset, set } = planSlice.actions;
export default planSlice.reducer;
