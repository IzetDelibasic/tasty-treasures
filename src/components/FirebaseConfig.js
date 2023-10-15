import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAHelUM_6smxZvAkvdgNSIwBOyaeFSHLBE",
    authDomain: "tasty-treasures.firebaseapp.com",
    projectId: "tasty-treasures",
    storageBucket: "tasty-treasures.appspot.com",
    messagingSenderId: "355404124002",
    appId: "1:355404124002:web:d0632ade1364886fc7663b"
  };

const app = initializeApp(firebaseConfig);  
export const auth = getAuth(app);
export const database = getDatabase(app);

