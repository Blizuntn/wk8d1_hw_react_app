// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJJYR6Fu2yx_3CRBgKmsu-_sW675hcGA4",
  authDomain: "carinventory-d2acd.firebaseapp.com",
  projectId: "carinventory-d2acd",
  storageBucket: "carinventory-d2acd.appspot.com",
  messagingSenderId: "347406476256",
  appId: "1:347406476256:web:c802ebd055f3d2d19c4185",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
