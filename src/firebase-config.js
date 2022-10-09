import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  //add firebase config here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
