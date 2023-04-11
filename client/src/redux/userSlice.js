import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    eerror: false,
 
    
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    isLoading: (state) => {
      state.loading = true;

    },
    isError: (state,action) => {
      state.eerror = action.payload
      console.log(state.eerror)
      state.loading=false

        state.eerror = true
        
        
    },
    logOut:(state)=>{
    console.log({...state})
      state.user = null
      
 
    },
    getFriends:(state,action)=>{
      state.user.friends = action.payload
    },
    removeError:(state,action)=>{
      state.eerror = false
    }
  },
});

export const {addUser,isLoading,isError,logOut,getFriends,removeError} = userSlice.actions

export default userSlice.reducer

