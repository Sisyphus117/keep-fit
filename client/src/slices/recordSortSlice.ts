import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SortState {
  sortBy: string;
  sortOrder: string;
}

const initialState: SortState = {
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
    set(state, action: PayloadAction<string>) {
      const [sortBy, sortOrder] = action.payload.split("-");
      state.sortBy = sortBy;
      state.sortOrder = sortOrder;
    },
  },
});

export const { reset, set } = recordSortSlice.actions;
export default recordSortSlice.reducer;
