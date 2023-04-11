import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { BiComment  } from "react-icons/bi";
import {HiUserAdd, HiUserRemove} from 'react-icons/hi'
import { useDispatch, useSelector } from "react-redux";
import { addRemoveFriend, likeDislike } from "../redux/apiCalls";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import {FcLike} from 'react-icons/fc'
import { useState } from "react";

const Post = ({ post, type }) => {
  const navigate = useNavigate();
  const fullName = post.firstName + " " + post.lastName;
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user?.user?._id);
  const friends = useSelector((state) => state.user?.user?.friends);
  console.log(friends)
  const [error,setError] = useState(null)

  const token = useSelector((state)=>state.user?.user?.token)
console.log(token)
const isFriend =  friends?.find((item)=>item._id === post.userId)






const isLiked = Boolean(post.likes[userId])
const likesCount = Object.keys(post.likes).length




  const handleFriend = (e) => {
    e.preventDefault();
    addRemoveFriend(dispatch, userId, post.userId,setError,token);
  };

const handleLikes = (e) =>{
  e.preventDefault()
  likeDislike(dispatch,userId,post._id,token)
  

}

  return (
    <Container>
      <WidgetContainer>
        <Left>
          <WidgetImg src={post.picturePath} />
          <Info>
            <Name onClick={() => navigate(`/profile/${post.userId}`)}>
              {fullName}
            </Name>
            <City>{post.location}</City>
          </Info>
        </Left>

        <Right onClick={handleFriend}  >
          {isFriend ? 
    <HiUserRemove style={{color: "#00aed1"}} />      :<HiUserAdd style={{color: "#00aed1"}}/> }
        </Right>
      </WidgetContainer>
    {error && <span style={{fontSize:10,textAlign:"right",paddingTop:5}}>{error}</span>}

      <Desc>{post.description}</Desc>
      <Img src={post?.postPicturePath} />
      <IconContainer>
        <IconsLeft>
          <LikesDiv onClick={handleLikes}>
            {isLiked ? <FcLike/>:
            <AiOutlineHeart />
            
            }

            <LikesCount>{likesCount} </LikesCount>
          </LikesDiv>
          <CommentsDiv>
            <BiComment />
            <CommentsCount>14</CommentsCount>

          </CommentsDiv>
        </IconsLeft>
        <IconsRight>
          <AiOutlineShareAlt/>
        </IconsRight>
      </IconContainer>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Desc = styled.h2`
  font-weight: 500;
  font-size: 15px;
  margin: 10px 0px;
`;
const Img = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
`;

const WidgetContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.type === "friend" && "10px"};
`;

const Left = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const WidgetImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

// const Left = styled.div`

// `
const Name = styled.span`
  font-weight: ${(props) => (props.type === "friend" ? "500" : "600")};
  margin-bottom: 3px;
`;

const City = styled.span`
  font-size: 13px;
`;

const Right = styled.div`
  display: flex;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgLighter};
  > svg {
    color: ${({ theme }) => theme.softer};
  }
  position: relative;
`;


const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding:10px 0px 0px 0px;
`
const IconsLeft = styled.div`
  display: flex;
  align-items: center;
  ;
`

const LikesDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  gap:3px;
  
`
const LikesCount = styled.div`
  font-size: 14px;
  
`

const CommentsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:3px;

  
`
const CommentsCount = styled.div`
  font-size: 14px;

  
`

const IconsRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`


export default Post;
