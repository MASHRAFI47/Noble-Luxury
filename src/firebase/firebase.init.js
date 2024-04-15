// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATS4MCxrduNWAfr5Mj-oHsK3VdaN9hKKs",
  authDomain: "noble-luxury.firebaseapp.com",
  projectId: "noble-luxury",
  storageBucket: "noble-luxury.appspot.com",
  messagingSenderId: "598025064883",
  appId: "1:598025064883:web:16215b08d823448e31bbc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
