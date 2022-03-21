import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useEffect, useContext } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAWx7ZrCpYATg5E53hrvhW1PU9-T5Dep2g",
  authDomain: "finaldb-e07d3.firebaseapp.com",
  projectId: "finaldb-e07d3",
  storageBucket: "finaldb-e07d3.appspot.com",
  messagingSenderId: "225637489763",
  appId: "1:225637489763:web:b4679062e8045248212c56",
  measurementId: "G-VLQML3BRWT",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
