"use client";

import {useContext, createContext, useState} from "react";
import {signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider} from "firebase/auth";
import {auth, db, realtimeDb} from "@/common/libs/firebase";
import {doc, getDoc, updateDoc} from "firebase/firestore";
import {increment, ref, update} from "firebase/database";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogCancel, DialogAction,
} from "@/common/components/dialog";
import {useRouter} from "next/navigation";

export const AuthContext = createContext({});

export function AuthContextProvider({children}) {
  /**
   *  @type {Object} user - The user object that contains the currently (logged in) user's information (null if none).
   *  @type {Function} setUser - The function to set the user object.
   */
  const [user, setUser] = useState(null);
  const [dialog, setDialog] = useState({type: "", title: "", message: "", isVisible: false, cancel: "", action: undefined});
  const candidate = {calon1: "Daffa Wahyu Pratama", calon2: "Irsad Najib Eka Putra"};
  const [dialogClass, setDialogClass] = useState({});
  const router = useRouter();

  function googleLogin() {
    setDialogClass({});
    if (!auth.currentUser) {
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider).then((cred) => {
        if (!cred.user.email.includes("@mail.ugm.ac.id")) {
          logout();
          return setDialog({
            type: "rejected",
            message: "Welcome to KPU KMTETI 2024! Unfortunately, we only accept vote from students of the Department of Electrical and Information Engineering of Gadjah Mada University. Please sign in with your UGM email address if you'd like to vote.",
            isVisible: true,
          });
        } else {
          const unsubscribe = onAuthStateChanged(auth, (user) => {
            const data = doc(db, "data-mahasiswa-dteti", user.email.replace("@mail.ugm.ac.id", ""));
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
      }).catch((err) => {
        if(err.message.includes("auth/popup-closed-by-user")) return;
        console.log(err)
        return setDialog({
          type: "error",
          message: "An error occurred while signing in. Please try again.",
          isVisible: true,
        });
      });
    }
    setUser(auth.currentUser);
    setDialog({type: "success", message: `Welcome back, ${auth.currentUser.displayName}!`, isVisible: true});
  }

  function logout(showDialog = false) {
    signOut(auth);
    setUser(null);
    if (showDialog) setDialog({type: "success", message: "You have been logged out.", isVisible: true});
  }

  function closeDialog() {
    setDialog({type: "", message: "", isVisible: false});
  }

  function vote(user, cand) {
    setDialogClass({title: "font-semibold text-3xl", description: "text-lg", cancel: "!border-0 bg-error-red text-text-light", action: "border-0 bg-placeholder-skyblue text-text-light", dialog: "bg-text-light text-text-dark"})

    const data = doc(db, "data-mahasiswa-dteti", user.email.replace("@mail.ugm.ac.id", ""));
    getDoc(data).then((snapshot) => {
      if (snapshot.get("voted")) {
        setDialog({
          type: "error",
          message: "You have already voted. You can only vote once.",
          isVisible: true,
        });
        logout();
      } else {
        setDialog({
          type: "confirm",
          title: "Pernyataan",
          message: `Dengan ini saya menyatakan bahwa saya memilih kandidat ${candidate[cand]} dengan sadar dan atas tanggung jawab pribadi`,
          isVisible: true,
          cancel: "Cancel",
          action: {
            text: "Saya Setuju",
            onClick: async () => {
              const voting = {};
              voting[cand] = increment(1);
              const votedRef = ref(realtimeDb, `votes/`);

              try {
                await updateDoc(doc(db, "data-mahasiswa-dteti", user.email.replace("@mail.ugm.ac.id", "")), {voted: true});
                update(votedRef, voting);
                logout();
              } catch(err) {
                console.log(err);
              }
              router.push("/thankyou")
              setDialog({
                type: "success",
                message: "Your vote has been successfully cast. Thank you for participating in the election!",
                isVisible: true,
              });
            }
          }
        })
      }
    });
  }

  const dialogTypes = {
    error: "Error",
    rejected: "Permission Denied",
    confirm: "Are You Sure?",
    success: "Success!",
  }

  return (
    <AuthContext.Provider value={{googleLogin, logout, user, vote}}>
      {children}
      <Dialog open={dialog.isVisible}>
        <DialogContent className={dialogClass["dialog"]}>
          <DialogHeader>
            <DialogTitle className={`text-2xl ${dialogClass["title"]}`}>
                {dialog.title ?? dialogTypes[dialog.type]}
            </DialogTitle>
            <DialogDescription className={`text-lg ${dialogClass["description"]}`}>
              {dialog.message}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogCancel onClick={closeDialog} className={`px-2 pt-1 rounded-lg border border-text-light ${dialogClass["cancel"]}`}>{dialog.cancel ?? "Close"}</DialogCancel>
            {dialog.action && (
              <DialogAction onClick={dialog.action.onClick} className={`px-2 pt-1 rounded-lg bg-primary border ${dialogClass["action"]}`}>{dialog.action.text ?? "Confirm"}</DialogAction>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AuthContext.Provider>
  )
}

export function UserAuth() {
  return useContext(AuthContext);
}