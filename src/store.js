import { configureStore } from "@reduxjs/toolkit";
import planReducer from "./slices/planSlice";
import recordSortReducer from "./slices/recordSortSlice";
import recordsReducer from "./slices/recordsSlice";
import userReducer from "./slices/userSlice";

export default configureStore({
  reducer: {
    plan: planReducer,
    recordSort: recordSortReducer,
    records: recordsReducer,
    user: userReducer,
  },
});
