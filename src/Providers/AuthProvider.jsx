import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase_config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export let AuthContext = createContext();

function AuthProvider({ children }) {
  let [user, setUser] = useState();
  //let [loading, setLoading] = useState(true);

  function createAccount(email, pass) {
    //setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  }
  function signIn(email, pass) {
    //setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  }
  function LogOut() {
    //setLoading(true);
    return signOut(auth);
  }
  function editProfile(userData) {
    return updateProfile(auth.currentUser, userData);
  }

  function resetPass(email) {
    return sendPasswordResetEmail(auth, email);
  }
  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (CurrUser) => {
      setUser(CurrUser);
      console.log(CurrUser?.email);
      //setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  let authInfo = {
    user,
    setUser,
    //loading,
    createAccount,
    signIn,
    LogOut,
    editProfile,
    resetPass,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
