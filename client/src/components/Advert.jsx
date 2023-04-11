import React from "react";
import styled from "styled-components";
import Img2 from "../assets/img2.jpg";

const Advert = () => {
  return (
    <Container>
      <AdvertItem>
        <Text>Sponsered</Text>
        <TextSoft>Create Ad</TextSoft>
      </AdvertItem>
      <Img src={Img2} />
      <AdvertItem>
        <Text type="bottom">GAP</Text>
        <TextSoft>gap@gap.com</TextSoft>
      </AdvertItem>
      <AdvertDesc>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </AdvertDesc>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 10px;
  margin-bottom:20px;

  @media only screen and (min-width: 620px) {
  padding: 20px;
    
      
        
          
             
          } 
`;
const AdvertItem = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  @media only screen and (min-width: 620px) {
  flex-direction:column;
    
      
        
           
        } 
`;
const Text = styled.div`
  font-weight: 600;

  font-size: ${(props) => props.type === "bottom" ? "14px" : "12px"};

  @media only screen and (min-width: 620px) {
    font-size:12px;
  }
`;
const TextSoft = styled.div`
  font-weight: 200;
  font-size: 12px;
`;

const Img = styled.img`
  max-width: 100%;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 5px;
`;

const AdvertDesc = styled.div`
    font-size: 10px;

    @media only screen and (min-width: 620px) {
    font-size: 12px;
      
        
          
             
          }  
`
export default Advert;
