"use client";

import { useContext, createContext, useState } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "@/common/libs/firebase";
import { doc, getDoc } from "firebase/firestore";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogCancel,
} from "@/common/components/dialog";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  /**
   *  @type {Object} user - The user object that contains the currently (logged in) user's information (null if none).
   *  @type {Function} setUser - The function to set the user object.
   */
  const [user, setUser] = useState(null);
  const [dialog, setDialog] = useState({ type: "", message: "", isVisible: false });

  function googleLogin() {
    if (!auth.currentUser) {
      const provider = new GoogleAuthProvider();
      setPersistence(auth, browserSessionPersistence).then(() => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((cred) => {
          if (!cred.user.email.includes("@mail.ugm.ac.id")) {
            logout();
            return setDialog({
              type: "rejected",
              message: "Welcome to KPU KMTETI 2024! Unfortunately, we only accept votes from students of the Department of Electrical and Information Engineering of Gadjah Mada University. Please sign in with your UGM email address if you'd like to vote.",
              isVisible: true,
            });
          } else {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
              const data = doc(db, "data-mahasiswa-dteti", user.displayName);
              getDoc(data).then((snapshot) => {
                if (!snapshot.exists()) {
                  logout();
                  return setDialog({
                    type: "rejected",
                    message: "Welcome to KPU KMTETI 2024! Your account is not registered as a valid student of the Department of Electrical and Information Engineering on batch 2021 - 2024, thus you do not have the permission to vote. Please contact us if you think we made a mistake",
                    isVisible: true,
                  });
                }
                setUser(cred.user);
                return setDialog({
                  type: "success",
                  message: `Successfully signed in. Welcome, ${cred.user.displayName}!`,
                  isVisible: true,
                });
              })
            });
            return () => unsubscribe();
          }
        }).catch(() => {
          return setDialog({
            type: "error",
            message: "An error occurred while signing in. Please try again.",
            isVisible: true
          });
        });
      })
      setUser(auth.currentUser);
      setDialog({ type: "success", message: `Welcome back, ${auth.currentUser.displayName}!`, isVisible: true });
    }
  }

  function logout(showDialog = false) {
    signOut(auth);
    setUser(null);
    if (showDialog) setDialog({ type: "success", message: "You have been logged out.", isVisible: true });
  }

  function closeDialog() {
    setDialog({ type: "", message: "", isVisible: false });
  }

  // TODO: vote function and realtime count function

  return (
    <AuthContext.Provider value={{ googleLogin, logout, user }}>
      {children}
      <Dialog open={dialog.isVisible}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <span className="text-2xl">
                {dialog.type === "error" ? "Error" : dialog.type === "rejected" ? "Permission Denied" : "Success!"}
              </span>
            </DialogTitle>
            <DialogDescription>
              <span className="text-lg">{dialog.message}</span>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogCancel onClick={closeDialog}
              className="px-2 py-1 rounded-lg border border-text-light">Close</DialogCancel>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AuthContext.Provider>
  )
}

export function UserAuth() {
  return useContext(AuthContext);
}