import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

const Profile = ({lightMode,setLightMode}) => {
  const {id} =  useParams()
  console.log(id)
  return (
    <div>
    <Container>
      <Navbar lightMode={lightMode} setLightMode={setLightMode} />
      <Main type="profile" id={id} />
    </Container>
    </div>
  );
};

const Container = styled.div`
height: 100vh;
max-width: 1280px;
margin:0px auto;
// background-color: ${({ theme }) => theme.bgLighter};
`

export default Profile;
