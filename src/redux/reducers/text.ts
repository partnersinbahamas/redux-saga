import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: number = 0;

const test = createSlice({
  name: 'test',
  initialState,
  reducers: {
    increace: (state: number) => {
      return state += 1;
    },
    decreace: (state: number) => {
      return state -= 1;
    },
  }
});

export const { increace, decreace } = test.actions;
export default test.reducer;