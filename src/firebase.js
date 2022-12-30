// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLdvvKgFyOX_mTwMrhxoDIsCY_VaRMd90",
  authDomain: "registration-form-55b43.firebaseapp.com",
  databaseURL: "https://registration-form-55b43-default-rtdb.firebaseio.com",
  projectId: "registration-form-55b43",
  storageBucket: "registration-form-55b43.appspot.com",
  messagingSenderId: "625218536812",
  appId: "1:625218536812:web:a2d31a2008600057d09f49",
  measurementId: "G-CLKZTGFEDT"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);