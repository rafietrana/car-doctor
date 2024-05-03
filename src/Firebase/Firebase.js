 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyCq0av08FTeOqRKiY9ygoQuVItCQ3NU46I",
  authDomain: "car-doctor-auth-68435.firebaseapp.com",
  projectId: "car-doctor-auth-68435",
  storageBucket: "car-doctor-auth-68435.appspot.com",
  messagingSenderId: "1086800762286",
  appId: "1:1086800762286:web:d5b28a2d26d47c4fe4a43f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);


export default auth;