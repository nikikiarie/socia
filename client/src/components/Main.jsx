import React from "react";
import styled from "styled-components";
import Center from "./Center";
import Left from "./Left";
import Right from "./Right";

const Main = ({type,id}) => {
  return (
    <Container type={type} >
      <Left type={type} />
      <Center type={type} id={id} />
      <Right type={type} />
    </Container>
  );
};

const Container = styled.div`
  padding: ${(props)=> props.type === "profile" ? "1rem 20px" :"1rem 20px" };
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};
  gap:20px;
  width:100%;
   background-color: ${({ theme }) => theme.bgLighter};


  @media only screen and (min-width: 460px) {
  padding: ${(props)=> props.type === "profile" ? "3rem 0px" :"3rem 0px" };

  }
`;


export default Main;
