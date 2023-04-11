import React from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";

const Register = () => {



  return (
    <Container>
       <Navbar>
        <Text>Socialmedia</Text>
      </Navbar>
      <LoginCenter>
        <LoginForm  />
      </LoginCenter>

    </Container>
  );
};



const Container = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Navbar = styled.div`
  background-color: ${({ theme }) => theme.bg};
  padding: 10px 0px;
`;

const Text = styled.div`
  text-align: center;
  color: #13b6cc;
  font-size: 20px;
  font-weight: 600;
`;
const LoginCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
  
`
export default Register;
