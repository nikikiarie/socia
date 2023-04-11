import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { storage } from "../firebase";
import { publicRequest } from "../makeRequest";
import { registerUser } from "../redux/apiCalls";

const OtherRegisterDetails = ({ type, data,setFirstName,setLastName }) => {
  const [error,setError]=useState(false)
  
  const [loading,setLoading]=useState(false)

  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [password, setPassword] = useState("");
  const [message,setMessage] =useState({})
  console.log(message) 

  
  const { image, firstName, lastName } = data;


  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true)
    setError(false)
if (image){
    const storageRef = ref(storage,image.name)

  
      
     const uploadTask = uploadBytesResumable(storageRef, image);
    
   
      uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        setLoading(false)
        setError(true)
        console.log('fghjklkjhgghj')
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          const product = { firstName, lastName,location,occupation,picturePath:downloadURL,password,email}
          
          registerUser(product,setMessage,setFirstName,setLastName,setEmail,setPassword,setLocation,setOccupation,setLoading,setError)
        });
      }
    );
    }else{
      const product = { firstName, lastName,location,occupation,picturePath:'',password,email}
      registerUser(product,setMessage,setFirstName,setLastName,setEmail,setPassword,setLocation,setOccupation,setLoading,setError)

    }


  };

  return (
    <Container type={type}>
      <Input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input
        placeholder="Occupation"
        value={occupation}
        onChange={(e) => setOccupation(e.target.value)}
      />
      <Input
        value={location}
        placeholder="Location"

        onChange={(e) => setLocation(e.target.value)}
      />
      <Input
        placeholder="Password"
        value={password}
        type='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={(e)=>handleClick(e)}>GET STARTED</Button>
      {loading && (
        <>
          <h4>Setting up Account</h4>
          
        </>
      )}
      {message && (
        <>
          <h4>{message.message}</h4>
          
        </>
      )}
      {error && (
        <>
          <h4>An error occured.</h4>
          
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: ${(props) => (props.type === "login" ? "none" : "flex")};
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  padding: 8px 5px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #69696953;
  margin: 10px 0px;
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
export default OtherRegisterDetails;
