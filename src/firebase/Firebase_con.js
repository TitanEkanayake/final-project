import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

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

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

//google account login
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        authProvider: "local",
        name: user.displayName,
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//login

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  if (!email || !password || !name) {
    return alert("Values are empty!");
  }
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      authProvider: "local",
      name,
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//passoword reset
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//logout
const logout = () => {
  signOut(auth);
};

// updateUserDocument
export const updateUserDocument = async (user) =>
  updateDoc(doc(db, "users", user.uid), user);

export {
  auth,
  db,
  storage,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
