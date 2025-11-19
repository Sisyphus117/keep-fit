import { configureStore } from "@reduxjs/toolkit";
import planReducer from "./plan/planSlice";
import recordSortReducer from "./fitness/recordSortSlice";
import recordsReducer from "./fitness/recordsSlice";

export default configureStore({
  reducer: {
    plan: planReducer,
    recordSort: recordSortReducer,
    records: recordsReducer,
  },
});
