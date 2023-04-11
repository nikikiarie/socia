import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    posts: [],
  },
  reducers: {
    setAllProfilePosts: (state, action) => {
      state.posts = action.payload;
    },
    setOnePost: (state, action) => {
      console.log(action.payload);
      const {
        useId,
        userId,
        paramsId,
        description,
        lastName,
        firstName,
        location,
        picturePath,
        postPicturePath,
        likes,
        comments,
        _id,
      } = action.payload;
      console.log(
        useId,
        userId,
        paramsId,
        description,
        lastName,
        firstName,
        location,
        picturePath,
        postPicturePath,
        likes,
        comments
      );
      if (paramsId === userId) {
        state.posts.push({
          paramsId,
          description,
          lastName,
          firstName,
          location,
          picturePath,
          postPicturePath,
          likes,
          comments,
          _id,
        });
      }
    },
    replaceProfilePost: (state, action) => {
      if (action.payload.userId === action.payload.id) {
        state.posts = state.posts.map((post) => {
          if (post._id === action.payload._id) return action.payload;
          return post;
        });
      }
    },
  },
});

export const { setAllProfilePosts, setOnePost, replaceProfilePost } =
  profileSlice.actions;

export default profileSlice.reducer;
