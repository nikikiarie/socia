import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// import { privateRequest } from "../makeRequest";
import { setAllPosts } from "../redux/postSlice";
import { setAllProfilePosts } from "../redux/profilePostSlice";
import Post from "./Post";
import axios from "axios";

const Posts = ({ type }) => {
  const dispatch = useDispatch();
  const profilePosts = useSelector((state) => state.profile?.posts);
  const mainPagePosts = useSelector((state) => state.posts?.posts);
  const token = useSelector((state)=>state.user?.user?.token)

  console.log(mainPagePosts)
 
 
  const { id } = useParams();
  const [userPosts, setUserPosts] = useState([]);

 
  const typeA = type === "profile" && id;
  const getPosts = async (type,m) => {
    try {
      console.log("try");
      const res = await axios.get(
        type === "main" ? "/posts/" : `/posts/${m}`,{headers:{token:`Bearer ${token}`}}
      );
      console.log(res.data);
      typeA && setUserPosts(res.data)
      dispatch(setAllProfilePosts(res.data))
      console.log([...res.data]);

      type === "main" && dispatch(setAllPosts(res.data));
    } catch (error) {}
  };

  useEffect(() => {
    getPosts(type,id);
  }, [type,id]);

  return (
    <Container>
      {typeA ? profilePosts.map((post) => {
          return <Post key={post._id} post={post} />;
        }) :
        mainPagePosts.map((post) => {
          return <Post key={post._id} post={post} />;
        })
        }
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default Posts;
