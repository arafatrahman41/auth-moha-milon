// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB65T90P_AuU8N4fP_L1GuJVwwbSV65P4g",
  authDomain: "auth-moha-milon-ded82.firebaseapp.com",
  projectId: "auth-moha-milon-ded82",
  storageBucket: "auth-moha-milon-ded82.appspot.com",
  messagingSenderId: "73906804806",
  appId: "1:73906804806:web:369d4be38848c28e7a5247"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;