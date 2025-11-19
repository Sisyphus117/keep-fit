import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  records: [],
};

const recordsSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    reset(state) {
      state.records = [];
    },
    read(state, action) {
      state.records = action.payload;
    },
    add(state, action) {
      state.records.push(action.payload);
    },
    remove(state, action) {
      const id = action.payload;
      state.records = state.records.filter((obj) => obj.id !== id);
    },
  },
});

export const { reset, read, add, remove } = recordsSlice.actions;
export default recordsSlice.reducer;
