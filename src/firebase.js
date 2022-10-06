// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSRYoudu86StRAB6-yceXedF2vbBonPKI",
  authDomain: "react-chat-app-66927.firebaseapp.com",
  projectId: "react-chat-app-66927",
  storageBucket: "react-chat-app-66927.appspot.com",
  messagingSenderId: "5370682454",
  appId: "1:5370682454:web:d1b57490d15e8e4f346ff7"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
























// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyCSRYoudu86StRAB6-yceXedF2vbBonPKI",
//   authDomain: "react-chat-app-66927.firebaseapp.com",
//   projectId: "react-chat-app-66927",
//   storageBucket: "react-chat-app-66927.appspot.com",
//   messagingSenderId: "5370682454",
//   appId: "1:5370682454:web:d1b57490d15e8e4f346ff7"
// };

// // Initialize Firebase

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth()
// export const storage = getStorage();
// export const db = getFirestore()