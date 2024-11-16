import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";
import {firebaseConfig} from "@/app/env.mjs";

export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
export const auth = getAuth(firebase);
export const realtimeDb = getDatabase(firebase);