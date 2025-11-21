import { configureStore } from "@reduxjs/toolkit";
import planReducer from "./slices/planSlice";
import recordSortReducer from "./slices/recordSortSlice";
import recordsReducer from "./slices/recordsSlice";
import userReducer from "./slices/userSlice";
import authenticateReducer from "./slices/authenticateSlice";

export default configureStore({
  reducer: {
    plan: planReducer,
    recordSort: recordSortReducer,
    records: recordsReducer,
    user: userReducer,
    authenticate: authenticateReducer,
  },
});
