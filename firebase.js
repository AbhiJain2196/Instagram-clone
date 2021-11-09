// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCXrR_ugtvV9yFayb-wDsLqnj5Vvx_1vM",
  authDomain: "instagram-clone-d4525.firebaseapp.com",
  projectId: "instagram-clone-d4525",
  storageBucket: "instagram-clone-d4525.appspot.com",
  messagingSenderId: "80815501380",
  appId: "1:80815501380:web:160ef14984abfdb4004c11",
  measurementId: "G-0CY6H3XC4M",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const analytics = typeof window != "undefined" ? getAnalytics(app) : undefined;

export { app, db, storage, analytics };
