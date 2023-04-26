import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAVc-Yn6nySb0j9reZ_GTMjovCisPBmM08",
    authDomain: "crypto-count-bc9a3.firebaseapp.com",
    projectId: "crypto-count-bc9a3",
    storageBucket: "crypto-count-bc9a3.appspot.com",
    messagingSenderId: "221806165494",
    appId: "1:221806165494:web:c40db60534393b18031bd7",
    measurementId: "G-59PPJ23JNS"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);