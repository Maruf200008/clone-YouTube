import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tag: "",
  search: "",
  subscribe: "",
};

export const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    addTag: (state, action) => {
      state.tag = action.payload;
    },
    addSearch: (state, action) => {
      state.search = action.payload;
    },
    removeSearch: (state) => {
      state.search = "";
    },
    removeTag: (state) => {
      state.tag = "";
    },
    addSubscribe: (state, action) => {
      state.subscribe = action.payload;
    },
  },
});

export const { addTag, addSearch, removeSearch, removeTag, addSubscribe } =
  videosSlice.actions;
export default videosSlice.reducer;
