import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAByDnH9lmF9UN9_ipm2PaX6p1nElkzfkA",
  authDomain: "fir-user-auth-fa23b.firebaseapp.com",
  projectId: "fir-user-auth-fa23b",
  storageBucket: "fir-user-auth-fa23b.appspot.com",
  messagingSenderId: "1088059625859",
  appId: "1:1088059625859:web:b66bc91fe288a309e466b6",
  measurementId: "G-RN995V5C16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}
