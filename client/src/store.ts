import { configureStore } from "@reduxjs/toolkit";
import planReducer from "./slices/planSlice";
import recordSortReducer from "./slices/recordSortSlice";
import recordsReducer from "./slices/recordsSlice";
import userReducer from "./slices/userSlice";
import authenticateReducer from "./slices/authenticateSlice";
import paginationReducer from "./slices/paginationSlice";
export const store = configureStore({
  reducer: {
    plan: planReducer,
    recordSort: recordSortReducer,
    records: recordsReducer,
    user: userReducer,
    authenticate: authenticateReducer,
    pagination: paginationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
