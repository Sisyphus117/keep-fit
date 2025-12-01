import { Record } from "@/types/record";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RecordsState {
  records: Record[];
}
const initialState: RecordsState = {
  records: [],
};

const recordsSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    reset(state) {
      state.records = [];
    },
    read(state, action: PayloadAction<Record[]>) {
      state.records = action.payload;
    },
    add(state, action: PayloadAction<Record>) {
      state.records.push(action.payload);
    },
    remove(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.records = state.records.filter((obj) => obj.id !== id);
    },
  },
});

export const { reset, read, add, remove } = recordsSlice.actions;
export default recordsSlice.reducer;
