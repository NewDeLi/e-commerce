import { useState, useEffect, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc } from "firebase/firestore";
import {
  auth,
  handleUserProfile,
  handleRegister,
  signIn,
  signInWithGoogle,
  logout,
  forgotPassword,
} from "../firebase/auth";

//Using Context Api to manage currentUser state and functions for authentication

export const AuthContext = createContext();

export const AuthPovider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const authListener = onAuthStateChanged(auth, async (userAuth) => {
      setLoading(true);
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
