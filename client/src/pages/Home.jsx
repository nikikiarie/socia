import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


const Home = ({ lightMode, setLightMode }) => {
  const location = useLocation();
  const user = useSelector((state) => state.user?.user?.token);
  console.log(user);
  console.log(location);

  return (
    <div>
      <Container>
        <Navbar lightMode={lightMode} setLightMode={setLightMode} />
        <Main type="main" />
      </Container>
    </div>
  );
};

const Container = styled.div`
    background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  max-width: 1280px;
  margin:0px auto;
`;
export default Home;
