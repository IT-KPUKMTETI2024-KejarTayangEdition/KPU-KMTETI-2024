"use client";

import {useContext, createContext, useState, useEffect} from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence
} from "firebase/auth";
import {auth, db} from "@/common/libs/firebase";
import {doc, getDoc} from "firebase/firestore";
import {setAuthDialogue} from "@/common/components/dialog";

export const AuthContext = createContext({});

export function AuthContextProvider({children}) {
  /**
   *  @type {Object} user - The user object that contains the currently (logged in) user's information (null if none).
   *  @type {Function} setUser - The function to set the user object.
   */
  const [user, setUser] = useState(null);
  function googleLogin() {
    if (!auth.currentUser) {
      const provider = new GoogleAuthProvider();
      setPersistence(auth, browserSessionPersistence).then(() => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((cred) => {
          setUser(cred.user);
          if (!cred.user.email.includes("@mail.ugm.ac.id")) {
            return setAuthDialogue({
              type: "warn",
              message: "Welcome to KPU KMTETI 2024! Sadly, we only accept votes from students of the Department of Electrical and Information Engineering in UGM. Please sign in with your UGM email address if you'd like to vote."
            });
          } else {
            useEffect(() => {
              const unsubscribe = onAuthStateChanged(auth, (user) => {
                const data = doc(db, "data-mahasoswa-dteti", user.displayName);
                getDoc(data).then((snapshot) => {
                  if (!snapshot.exists()) {
                    return setAuthDialogue({
                      type: "warn",
                      message: "Welcome to KPU KMTETI 2024! Your account is not registered as a valid voter thus you do not have the permission to vote. Please contact us if you think we made a mistake!"
                    });
                  }
                  return setAuthDialogue({
                    type: "success",
                    message: `Sign in complete. Welcome, ${cred.user.displayName}!`
                  });
                })
              });
              return () => unsubscribe();
            }, [])
          }
        }).catch((err) => {
          console.log(err);
          setAuthDialogue({type: "error", message: "An error occured while signing in. Please try again."});
        });
      });
    }
  }

  function logout() {
    signOut(auth);
    setUser(null);
    setAuthDialogue({type: "success", message: "You have been logged out."});
  }

  // TODO: vote function and realtime count function

  return (
    <AuthContext.Provider value={{googleLogin, logout, user}}>
      {children}
    </AuthContext.Provider>
  )
}

export function UserAuth() {
  return useContext(AuthContext);
}