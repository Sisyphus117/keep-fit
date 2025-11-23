import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "",
  sortOrder: "",
};

const recordSortSlice = createSlice({
  name: "recordSort",
  initialState,
  reducers: {
    reset(state) {
      state.sortBy = "";
      state.sortOrder = "";
    },
    set(state, action) {
      const [sortBy, sortOrder] = action.payload.split("-");
      state.sortBy = sortBy;
      state.sortOrder = sortOrder;
    },
  },
});

export const { reset, set } = recordSortSlice.actions;
export default recordSortSlice.reducer;
