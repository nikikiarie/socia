import React, { useEffect } from "react";
import User from '../assets/user.jpg'
import { BiUserPlus } from "react-icons/bi";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { MdPrivateConnectivity } from "react-icons/md";
import { privateRequest } from "../makeRequest";

const UserFriendWidget = ({type,post}) => {





  return (
    <Container type={type}  >
      <Left>
        <Img src={user} />
        <Info>
          <Name type={type}>{post?.firstName}</Name>
          <City >{post?.location}</City>
        </Info>
      </Left>
      <Right>
        <BiUserPlus/>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props)=>props.type === "friend" && "10px"};
`;


const Left = styled.div`
display: flex;
gap:20px;
align-items: center;


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
font-weight:  ${(props)=>props.type === "friend" ? "500" :"600"};
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
