import React from "react";
import styled from "styled-components";
import Advert from './Advert'
import FriendsList from "./FriendsList";

const Right = ({type}) => {
  return <Container type={type}> 
    <Advert/>
    <FriendsList type={type}/>
  </Container>;
};

const Container = styled.div`
  flex: 0.5;
margin-right:0px;

  display:${({type})=> type ==="profile" && "none"  };

  @media only screen and (min-width: 620px) {
   margin-right:20px;
      
        
           
        }

`;
export default Right;
