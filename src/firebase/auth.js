import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getDoc, getFirestore } from "firebase/firestore";
import { app } from "./config";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";

//functions for AuthContext

export const auth = getAuth(app);
const db = getFirestore(app);

export const handleUserProfile = async (userAuth, ...additionalData) => {
  const { uid } = userAuth;
  const userRef = doc(db, "users", uid);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const { displayName, email } = userAuth;
    let timestamp = serverTimestamp();
    const userRoles = ["user"];

    try {
      await setDoc(
        userRef,
        {
          displayName,
          email,
          timestamp: timestamp,
          userRoles,
          ...additionalData,
        },
        { merge: true }
      );
    } catch (err) {
      console.log(err);
    }
  }
  return userRef;
};

export const handleRegister = async (name, email, password) => {
  try {
    const currentUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    updateProfile(currentUser, { displayName: `${name} ` }); //TO-DO: does not update display name in firestore
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

export const logout = async () => {
  try {
    return await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export const forgotPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log(error);
  }
};
