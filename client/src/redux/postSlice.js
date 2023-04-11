import { createSlice } from "@reduxjs/toolkit";
import { MdAddCircleOutline } from "react-icons/md";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loadingg: false,
    errorr: false,
  },
  reducers: {
    setAllPosts: (state, action) => {
      state.posts = action.payload;
    },
    setNewPost: (state, action) => {
      state.posts.push(action.payload);
    },
    replaceLikedPost: (state, action) => {
      console.log(action.payload);

      state.posts = state.posts.map((post) => {
        if (post._id === action.payload._id) return action.payload;
        return post;
      });
    },
  },
});

export const { setAllPosts, setNewPost, replaceLikedPost } = postSlice.actions;

export default postSlice.reducer;
