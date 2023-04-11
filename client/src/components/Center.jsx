import React from "react";
import styled from "styled-components";
import AddPost from "./AddPost";
import Posts from "./Posts";

const Center = ({type,id}) => {
  console.log(type)
  return (
    <Container>
      <AddPost type={type} />
      <Posts type={type} id={id}/>
    </Container>
  );
};

const Container = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  // margin-left:20px;


  @media only screen and (min-width: 620px) {
    margin-left:0px;
  flex: 1;
  margin-right: ${(props)=> props.type === "profile" ? "20px" :"" };

  

      
        
           
        } 
  
`;
export default Center;
