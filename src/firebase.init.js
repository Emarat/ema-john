// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAimnQ9pT5EI0xQkmNx0kRKyortc7JQPX8",
    authDomain: "ema-john-b3fb8.firebaseapp.com",
    projectId: "ema-john-b3fb8",
    storageBucket: "ema-john-b3fb8.appspot.com",
    messagingSenderId: "79217388787",
    appId: "1:79217388787:web:e22321f4e1d962e6185b86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;