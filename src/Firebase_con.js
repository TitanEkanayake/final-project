import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

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

export const db = getFirestore(app);
export const auth = getAuth(app);
