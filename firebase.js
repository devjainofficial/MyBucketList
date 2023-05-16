// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtqA5TnUcX1W_Afe__HKkyDdpNMGfUq0w",
  authDomain: "bucketlistdev1.firebaseapp.com",
  projectId: "bucketlistdev1",
  storageBucket: "bucketlistdev1.appspot.com",
  messagingSenderId: "851592079816",
  appId: "1:851592079816:web:bbb94bd1d96a49394a78fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)