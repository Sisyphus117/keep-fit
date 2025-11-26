import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  curPage: 0,
  totalPages: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    init(state, actions) {
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
  },
});

export const { init, lastPage, nextPage } = paginationSlice.actions;
export default paginationSlice.reducer;
