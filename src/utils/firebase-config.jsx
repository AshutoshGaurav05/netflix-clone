import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDHkqdkaCXBSfRtWvD_2vFUVamcKgTfamQ",
  authDomain: "react-netflix-clone-2b3d0.firebaseapp.com",
  projectId: "react-netflix-clone-2b3d0",
  storageBucket: "react-netflix-clone-2b3d0.appspot.com",
  messagingSenderId: "1011754311584",
  appId: "1:1011754311584:web:73e2824d6ba5a630308ec5",
  measurementId: "G-NDJ05CBSMC"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);