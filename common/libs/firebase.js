import {initializeApp} from "@firebase/app";
import {getFirestore} from "@firebase/firestore";
import {firebaseConfig} from "@/app/env.mjs";
import {getStorage} from "@firebase/storage";

export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
export const storage = getStorage(firebase);