import { EmptyObject, Plan } from "@/types";
import { isValidPlan } from "@/types/plan";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PlanState {
  isEmpty: boolean;
  item: string;
  startDate: string;
  duration: number;
}

const initialState = {
  isEmpty: true,
  item: "",
  startDate: "",
  duration: 0,
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    reset(state) {
      state.isEmpty = true;
      state.item = "";
      state.startDate = "";
      state.duration = 0;
    },
    set(state, action: PayloadAction<Plan | EmptyObject>) {
      if (isValidPlan(action.payload)) {
        const { item, startDate, duration } = action.payload;
        state.item = item;
        state.startDate = startDate;
        state.duration = +duration;
        state.isEmpty = false;
      } else {
        state.isEmpty = true;
        state.item = "";
        state.startDate = "";
        state.duration = 0;
      }
    },
  },
});

export const { reset, set } = planSlice.actions;
export default planSlice.reducer;
