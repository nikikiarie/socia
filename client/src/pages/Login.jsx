import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { logIn } from "../redux/apiCalls";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logOut, removeError } from "../redux/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.user?.user);
  const error = useSelector((state) => state.user);
console.log(error)

  console.log(location);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(removeError())
    logIn(dispatch, navigate, { email, password });
  };
  return (
    <Container>
      <Navbar>
        <Text>Sociomedia</Text>
      </Navbar>

      <LoginCenterDiv>
        <LogForm>
          <Title>Welcome to SocioPedia,the Social Media For Enthusiasts</Title>
          <>
            <Input
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              name="password"

              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleClick}>LOG IN</Button>
          </>
          {/* {error ? <h3>{error}</h3> : ''} */}
          {location?.state === "verified" ? (
            ""
          ) : (
            <Link to="/register">
              <h5 style={{ color: "#099e97", textDecoration: "underline" }}>
                Sign Up
              </h5>
            </Link>
          )}
        </LogForm>
      </LoginCenterDiv>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
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

const LoginCenterDiv = styled.div`
  display: flex;
  height: 80vh;
  align-items: center;
  justify-content: center;
`;
const LogForm = styled.div`
  background-color: ${({ theme }) => theme.bg};
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  font-weight: 600;
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.bg};
  margin: 10px 0px;
  flex: 1;
  padding: 8px 0px 8px 3px;
  border: 1px solid ${({ theme }) => theme.soft};
`;

const Button = styled.button`
  flex: 1;
  padding: 10px 0px;
  background-color: #00aed1;
  border: none;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  margin: 10px 0px;
`;

export default Login;
