// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBiioW7Boj3hiQFMYMHkUsZd1k1_0cxUg",
  authDomain: "newchat-45fe5.firebaseapp.com",
  projectId: "newchat-45fe5",
  storageBucket: "newchat-45fe5.appspot.com",
  messagingSenderId: "891675069957",
  appId: "1:891675069957:web:69c846527cc43f75ad566c",
  measurementId: "G-L740K3E0QZ"
};
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const storage = getStorage();
export const db = firebase.firestore();

auth.useEmulator('http://localhost:9099');

if(window.location.hostname === 'localhost'){
  db.useEmulator('localhost', '8080');
}

export default firebase