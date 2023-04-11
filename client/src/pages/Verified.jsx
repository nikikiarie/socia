import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
// import { publicRequest } from "../makeRequest";
import { logOut } from "../redux/userSlice";

const Verified = () => {
  const { userId, token } = useParams();
  const [message, setMessage] = useState("");
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch()


const handleClick =() =>{
 navigate('/login')
 user && dispatch(logOut())
}


  useEffect(() => {
    const fetchVerify = async () => {
      try {
        const res = await axios.get(
          `/users/${userId}/verify/${token}`
        );
        setMessage(res.data);
      } catch (err) {}
    };
    fetchVerify(userId, token);
  }, [userId, token]);
  return (
    <Container>
      <Navbar>
        <Text>Sociopedia</Text>
      </Navbar>
      {message && (
        <div style={{height:"60vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
          <h2>{message}</h2>
          
          <button onClick={handleClick} style={{width:"100px",marginTop:"20px"}}>Log In</button>
          
        </div>
      )}
    </Container>
  );
};

export default Verified;
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
