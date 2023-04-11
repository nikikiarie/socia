import axios from "axios";
// import { privateRequest, axios } from "../makeRequest";
import { replaceLikedPost, setNewPost } from "./postSlice";
import { replaceProfilePost, setOnePost } from "./profilePostSlice";
import { addUser, isError, isLoading, removeError } from "./userSlice";
import { getFriends } from "./userSlice";

export const logIn = async (dispatch, navigate, user) => {
  
  try {
    dispatch(isLoading());
    const res = await axios.post("/auth/login", user);
    console.log(res.data);
    dispatch(addUser(res.data));
    dispatch(removeError());

    const data = res.data;
    navigate("/", { state: data });
  } catch (error) {
    dispatch(isError(error.response.data));

    
  }
};

export const registerUser = async (product,setMessage,setFirstName,setLastName,setEmail,setPassword,setLocation,setOccupation,setLoading,setError) => {
 
  try {
    const res = await axios.post("/auth/register", { ...product });
    setLoading(false)

    setMessage(res.data)
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    
    setLocation('')
    setOccupation('')
    console.log(res);
  } catch (err) {
    console.log(err)
    setLoading(false)
    setError(true)

  }
};

export const newPost = async (post, dispatch, paramsId, useId, token) => {
  
  try {
    const res = await axios.post(
      "/posts/new",
      { ...post },
      {
        headers: {
          token: `Bearer ${token}`,
        },
      }
    );
    console.log(res.data);
    dispatch(setNewPost(res.data));
    dispatch(setOnePost({ paramsId, useId, ...res.data }));
  } catch (err) {}
};

export const addRemoveFriend = async (
  dispatch,
  userId,
  postId,
  setError,
  token
) => {
  // console.log(userId, postId);
  console.log(token)
  try {
    const res = await axios.patch(
      "/users/friend",
      { id: userId, friendId: postId },
      {
        headers: {
          token: `Bearer ${token}`,
        },
      }
    );
    console.log(res.data);
    dispatch(getFriends(res.data));
  } catch (err) {
    console.log(err);
    // setError(err.response.data);
  }
};

export const addRemoveFriendWidget = async (
  dispatch,
  userId,
  postId,
  token
) => {
  // console.log(userId, postId);
  console.log(token)
  try {
    const res = await axios.patch(
      "/users/friend",
      { id: userId, friendId: postId },
      {
        headers: {
          token: `Bearer ${token}`,
        },
      }
    );
    console.log(res.data);
    dispatch(getFriends(res.data));
  } catch (err) {
    console.log(err);
    // setError(err.response.data);
  }
};


export const likeDislike = async (dispatch, userId, postId, token) => {
  const id = userId;
  try {
    const res = await axios.patch(
      "/posts/like/",
      { userId: userId, postId: postId },
     
      {
        headers: {
          token: `Bearer ${token}`,
        },
      }
    );
    dispatch(replaceLikedPost(res.data));
    dispatch(replaceProfilePost({ ...res.data, id }));
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};
