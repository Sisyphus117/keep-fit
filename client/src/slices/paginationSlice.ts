import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PaginationState {
  curPage: number;
  totalPages: number;
}

const initialState: PaginationState = {
  curPage: 0,
  totalPages: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    init(state, actions: PayloadAction<number>) {
      state.curPage = 0;
      state.totalPages = actions.payload;
    },
    lastPage(state) {
      if (state.curPage > 0) {
        state.curPage = state.curPage - 1;
      }
    },
    nextPage(state) {
      if (state.curPage < state.totalPages - 1) {
        state.curPage = state.curPage + 1;
      }
    },
    setPage(state, actions: PayloadAction<number>) {
      const page = actions.payload;
      if (page >= 0 && page < state.totalPages) {
        state.curPage = page;
      }
    },
  },
});

export const { init, lastPage, nextPage, setPage } = paginationSlice.actions;
export default paginationSlice.reducer;
