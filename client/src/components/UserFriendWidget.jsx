import React, { useEffect } from "react";
import User from '../assets/user.jpg'
import { BiUserPlus } from "react-icons/bi";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { MdPrivateConnectivity } from "react-icons/md";
import { privateRequest } from "../makeRequest";
import { addRemoveFriend, addRemoveFriendWidget } from "../redux/apiCalls";

const UserFriendWidget = ({friend}) => {
const fullName = `${friend.firstName} ${friend.lastName}` 
const userId = useSelector((state)=>state.user.user._id)
const userPostId = friend._id
const dispatch = useDispatch()
const token = useSelector((state)=>state.user?.user?.token)



const handleAddFriend = (e)=>{
  e.preventDefault()
  addRemoveFriendWidget(dispatch,userId,userPostId,token)
}


  return (
    <Container   >
      <Left>
        <Img src={friend.picturePath} />
        <Info>
          <Name >{fullName}</Name>
          <City ></City>
        </Info>
      </Left>
      <Right>
        <BiUserPlus onClick={handleAddFriend}/>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;


const Left = styled.div`
display: flex;
gap:10px;
align-items: center;

@media only screen and (min-width: 620px) {
  gap:20px;

}

`

const Img = styled.img`
width: 30px;
height: 30px;
object-fit: cover;
border-radius: 50%;
`

const Info = styled.div`
display: flex;
flex-direction: column;
`

// const Left = styled.div`

// `
const Name = styled.span`
font-weight:   500;
margin-bottom: 3px;
`

const City = styled.span`
font-size: 13px;
`

const Right = styled.div`
display: flex;
border-radius: 50%;
width: 30px;
height: 30px;
align-items: center;
justify-content: center;
background-color: ${({theme})=>theme.bgLighter};
>svg{
    color:${({theme})=>theme.softer}
}
`

// const Left = styled.div`

// `


export default UserFriendWidget;
