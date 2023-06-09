import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzeLwx1VtL_Vp9dLetT0vkRXqevx0l0W0",
  authDomain: "dinamiko-e794c.firebaseapp.com",
  projectId: "dinamiko-e794c",
  storageBucket: "dinamiko-e794c.appspot.com",
  messagingSenderId: "346249994164",
  appId: "1:346249994164:web:9faf15c43ca0b6786b9ce1",
  measurementId: "G-KHR8GNPR5K",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
