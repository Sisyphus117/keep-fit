import { configureStore } from "@reduxjs/toolkit";
import planReducer from "./plan/planSlice";

export default configureStore({
  reducer: {
    plan: planReducer,
  },
});
