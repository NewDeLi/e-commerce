import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getDoc, getFirestore } from "firebase/firestore";
import { app } from "./config";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { useState, useEffect, createContext } from "react";

const auth = getAuth(app);
const db = getFirestore(app);

//Using Context Api to manage currentUser state and functions for authentication

export const AuthContext = createContext();

export const AuthPovider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    const authListener = onAuthStateChanged(auth, async (userAuth) => {
      try {
        if (userAuth) {
          const userRef = await handleUserProfile(userAuth);
          const snapshot = await getDoc(userRef);
          setCurrentUser(snapshot.data());
        } else {
          setCurrentUser(null);
        }
      } catch (error) {
        // console.log(error);
      } finally {
        setLoading(false);
      }
    });
    return () => authListener();
  }, []);

  //write current user to firestore

  const handleUserProfile = async (userAuth, ...additionalData) => {
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
        // console.log(err);
      }
    }
    return userRef;
  };

  //functions for authentication

  const handleRegister = async (name, email, password) => {
    setLoading(true);
    try {
      const currentUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(currentUser, { displayName: `${name} ` }); //TO-DO: does not update display name in firestore
    } catch (error) {
      // console.log(error)
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logout = async () => {
    setLoading(true);
    try {
      return await signOut(auth);
    } catch (error) {
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const forgotPassword = async (email) => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        logout,
        signInWithGoogle,
        handleRegister,
        signIn,
        forgotPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
