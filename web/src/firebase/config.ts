// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage,ref } from "firebase/storage";
import { getApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyCsgyDoJeSlrNkxF9pDibHi3gs63DHMKt0",
  authDomain: "password-generator-4395d.firebaseapp.com",
  projectId: "password-generator-4395d",
  storageBucket: "password-generator-4395d.appspot.com",
  messagingSenderId: "968273441840",
  appId: "1:968273441840:web:6e8d306155a510f57c29f5",
  measurementId: "G-0H9VQ36B74",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);
export const storage = getStorage();
export const user = getAuth().currentUser

