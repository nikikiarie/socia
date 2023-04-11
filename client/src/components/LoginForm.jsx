import React, { useState } from "react";
import styled from "styled-components";
import OtherRegisterDetails from "./OtherRegisterDetails";
import Dropzone from "react-dropzone";
import { ref } from "firebase/storage";
import { storage } from "../firebase";

const LoginForm = ({ type }) => {
  const [image,setImage] = useState(null)
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  console.log(image)
  

  console.log(type);
  return (
    <Container>
      <Title>Welcome to SocioPedia,the Social Media For SocioPaths</Title>
      <Names>
        <Input placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
        <Input placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
      </Names>
      <Dropzone onDrop={(acceptedFiles) => {
        setImage(acceptedFiles[0])
        


      }}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()} style={{border:"1px dotted #44434352",padding:"5px"}}>
              <input {...getInputProps()} />
              <p >Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
      <OtherRegisterDetails type={type} data={{firstName,lastName,image}} setFirstName={setFirstName} setLastName={setLastName}/>
    </Container>
  );
};

const Container = styled.div`
  margin: 20px 15%;
  background-color: ${({ theme }) => theme.bg};
  padding: 20px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  font-weight: 600;
`;
const Names = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: 20px 0px 10px 0px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px 5px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #69696953;
`;
export default LoginForm;
