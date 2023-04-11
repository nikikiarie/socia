// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCdYJh3G70tNpSlPeAwPuc0EtgieNRrFqs",
  authDomain: "example-one1.firebaseapp.com",
  projectId: "example-one1",
  storageBucket: "example-one1.appspot.com",
  messagingSenderId: "596926552585",
  appId: "1:596926552585:web:1b284f96da3d36532cb6d8",
  measurementId: "G-X809ZZP4R9"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);