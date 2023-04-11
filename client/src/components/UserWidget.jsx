import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HiOutlineUserAdd } from "react-icons/hi";

import { RiSuitcase2Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { SlSocialTwitter } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { useSelector } from "react-redux";
// import { privateRequest, publicRequest } from "../makeRequest";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UserWidget = ({ type }) => {
  const [currentUser, setCurrentUser] = useState({});
  const user = useSelector((state) => state.user.user);
  console.log(user)
  const friends = useSelector((state)  => state.user?.user);
  const token = useSelector((state)=>state.user?.user?.token)
  
  const navigate = useNavigate();

  const { id } = useParams();
  
 

  const idd = user?._id;
  const userfullName = `${user?.firstName} ${user?.lastName}`;

  const fullName = `${currentUser?.firstName} ${currentUser?.lastName}`;

  const getUser = async (m,n) => {
    try {
      const res = await axios.get(
     type === "main" ? `/users/${m}` : `/users/${n}`,{headers:{token:`Bearer ${token}`}}
      );
      setCurrentUser(res.data);
    } catch (err) {
      
    }
  };

  
  useEffect(() => {
    
    getUser(idd,id);
  }, [idd,id]);

  return (
    <Container
      onClick={() => {
        navigate(`/profile/${user._id}`);
      }}
    >
      <UserDetails>
        <UserDesc>
          <UserImg src={type === "main" ? user?.picturePath : currentUser?.picturePath } />
          <UserName>
            <Name>{type === "main" ? userfullName : fullName}</Name>
            <UserFriend>{friends?.length} friends</UserFriend>
          </UserName>
        </UserDesc>
        <HiOutlineUserAdd />
      </UserDetails>
      <Hr />
      <UserLocation>
        <UserLocationItem>
          <GoLocation />
          <span>{type === "main" ? user?.location : currentUser?.location}</span>
        </UserLocationItem>
        <UserLocationItem>
          <RiSuitcase2Line />
          <span>{currentUser?.occupation}</span>
        </UserLocationItem>
      </UserLocation>
      <Hr />
      <UserImpression>
        <UserImpressionItem>
          <Text>Who viewed my Post</Text>
          <Number>{currentUser?.viewedProfile}</Number>
        </UserImpressionItem>
        <UserImpressionItem>
          <Text>Impressions to your post</Text>
          <Number>{currentUser?.impressions}</Number>
        </UserImpressionItem>
      </UserImpression>
      <Hr />
      <UserSocials>
        <SocialText>Social Profiles</SocialText>
        <SocialItem>
          <SocialLeft>
            <SlSocialTwitter />
            <SocialItemDiv>
              <SocialDivText>Twitter</SocialDivText>
              <SocialSoftText>Social Network</SocialSoftText>
            </SocialItemDiv>
          </SocialLeft>
          <SocialRight>
            <AiOutlineEdit />
          </SocialRight>
        </SocialItem>
        <SocialItem>
          <SocialLeft>
            <FiLinkedin />
            <SocialItemDiv>
              <SocialDivText>LinkedIn</SocialDivText>
              <SocialSoftText>Network Platform</SocialSoftText>
            </SocialItemDiv>
          </SocialLeft>
          <SocialRight>
            <AiOutlineEdit />
          </SocialRight>
        </SocialItem>
      </UserSocials>
    </Container>
  );
};

const Container = styled.div`
margin-left:20px;

  display: flex;
  background-color: ${({ theme }) => theme.bg};
  padding: 10px;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
`;

const UserDesc = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

const UserName = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: bold;
`;
const UserFriend = styled.span`
  font-size: 12px;
`;

const Hr = styled.hr`
  border: 1px solid ${({ theme }) => theme.soft};
`;

const UserLocation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
`;

const UserLocationItem = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px 0;
  align-items: center;
  > svg {
    font-size: 20px;
  }
  > span {
    font-size: 14px;
  }
`;

const UserImpression = styled.div`
  padding: 20px 0px 10px 0px;
  display: flex;
  flex-direction: column;
`;
const UserImpressionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 0px 2px;
`;

const Text = styled.span`
  font-size: 14px;
`;
const Number = styled.span`
  font-size: 14px;
`;

const UserSocials = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 10px 0px;
`;
const SocialText = styled.span`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 15px;
`;
const SocialItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const SocialLeft = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding-left: 5px;
`;


const SocialItemDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const SocialDivText = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 3px;
`;

const SocialSoftText = styled.span`
  font-size: 14px;
  font-weight: 300;
`;

const SocialRight = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default UserWidget;
