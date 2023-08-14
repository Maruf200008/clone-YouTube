import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tag: "",
  search: "",
  subscribe: "",
  comments: [],
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
    addComments: (state, action) => {
      state.comments.push(action.payload);
    },
  },
});

export const { addTag, addSearch, removeSearch, removeTag, addComments } =
  videosSlice.actions;
export default videosSlice.reducer;
