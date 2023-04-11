import React from "react";
import styled from "styled-components";
import { HiOutlineUserAdd } from "react-icons/hi";
import User from "../assets/user.jpg";
import { CiLocationOn } from "react-icons/ci";
import { RiSuitcase2Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { SlSocialTwitter } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";
import UserWidget from "./UserWidget";
import FriendsList from "./FriendsList";

const Left = ({type,id}) => {
  const i = type === 'profile'
  console.log(i)
  return (
    <Container>
      <UserWidget type={type} />
      {type === "profile" && <FriendsList type={type}/>}
    </Container>
  );
};

const Container = styled.div`
  flex: 0.7;
  display: ${(props)=> props.type === "profile" ? "flex" :"none" };

  // display: none;
  flex-direction: column;


  @media only screen and (min-width: 800px) {
    display: flex;
      
        
           
        } 
`;

export default Left;
