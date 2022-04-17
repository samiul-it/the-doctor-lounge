// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKCmLACXAAPVbNK6gRwbxVpt4nmr8sIMc",
  authDomain: "the-doctor-lounge.firebaseapp.com",
  projectId: "the-doctor-lounge",
  storageBucket: "the-doctor-lounge.appspot.com",
  messagingSenderId: "657793705437",
  appId: "1:657793705437:web:f8cad8691e4befe0224234",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth=getAuth(app);
export default auth;