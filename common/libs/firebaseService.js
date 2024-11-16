import {realtimeDb} from "@/common/libs/firebase";
import {ref, onValue, off} from "firebase/database";

export function subscribeToData(path, callback) {
  const dbRef = ref(realtimeDb, path);

  function valueChange(snapshot) {
    if (snapshot.exists()) {
      callback(snapshot.val());
    } else {
      callback(null);
    }
  }

  onValue(dbRef, valueChange);
  return () => off(dbRef, "value", valueChange);
}
