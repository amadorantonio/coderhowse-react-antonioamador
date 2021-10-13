// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHpgK_-I7ZXe3T0xn8xaQBtsHGFKKT7zs",
    authDomain: "antonio-amador-coderhouse.firebaseapp.com",
    projectId: "antonio-amador-coderhouse",
    storageBucket: "antonio-amador-coderhouse.appspot.com",
    messagingSenderId: "131495656587",
    appId: "1:131495656587:web:97e6a3241b490f5ca3288e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

  export default db