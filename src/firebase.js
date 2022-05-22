// import firebase from "firebase/app"
// import "firebase/auth"

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// })

// export const auth = app.auth()
// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYfWXPI1EnXQZszZqF74cAhpXm2T2xr14",
  authDomain: "estore-91542.firebaseapp.com",
  projectId: "estore-91542",
  storageBucket: "estore-91542.appspot.com",
  messagingSenderId: "311536741794",
  appId: "1:311536741794:web:0c6177e790107ea25e96fb",
  measurementId: "G-BCNCNJP7C8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);