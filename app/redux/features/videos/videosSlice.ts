import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 5;
    },
  },
});

export const { increment } = videosSlice.actions;
export default videosSlice.reducer;
