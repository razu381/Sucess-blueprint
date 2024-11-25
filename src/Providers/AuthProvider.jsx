import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase_config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export let AuthContext = createContext();

function AuthProvider({ children }) {
  let [user, setUser] = useState({
    displayName: "Razu",
    photoUrl: "https://avatars.githubusercontent.com/u/60482204?v=4&size=64",
    email: "sirazu52@gmail.com",
  });
  //let [loading, setLoading] = useState(true);

  function createAccount(email, pass) {
    //setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  }
  function SignIn(email, pass) {
    //setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  }
  function LogOut() {
    //setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (CurrUser) => {
      setUser(CurrUser);
      //setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  let authInfo = {
    user,
    //loading,
    createAccount,
    SignIn,
    LogOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
