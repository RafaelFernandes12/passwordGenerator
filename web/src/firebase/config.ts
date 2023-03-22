// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCsgyDoJeSlrNkxF9pDibHi3gs63DHMKt0",
  authDomain: "password-generator-4395d.firebaseapp.com",
  projectId: "password-generator-4395d",
  storageBucket: "password-generator-4395d.appspot.com",
  messagingSenderId: "968273441840",
  appId: "1:968273441840:web:6e8d306155a510f57c29f5",
  measurementId: "G-0H9VQ36B74"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
const analytics = getAnalytics(app);