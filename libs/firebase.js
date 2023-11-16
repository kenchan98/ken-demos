// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getStorage, uploadBytes, getDownloadURL, ref } from "firebase/storage";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpwZnUGkvs_lmkq_Sfp9GI31n2iOhDvkw",
  authDomain: "ken-demo-d95fe.firebaseapp.com",
  databaseURL: "https://ken-demo-d95fe.firebaseio.com",
  projectId: "ken-demo-d95fe",
  storageBucket: "ken-demo-d95fe.appspot.com",
  messagingSenderId: "804281651334",
  appId: "1:804281651334:web:610237dc21fb4bd8",
};

// Initialize Firebase
const firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

/*


*/
const storage = getStorage();
//
export function uploadToStorage(imgData, pathName) {
  const imgOnStorage = ref(storage, pathName);
  return uploadBytes(imgOnStorage, imgData).then(() => {
    return getDownloadURL(ref(storage, imgOnStorage)).then((url) => url);
  });
}
/*



*/
const db = getFirestore(firebase_app);
export async function getFirebaseDoc(_collection, _id) {
  const collect = collection(db, "fnol");

  let docRef = doc(db, _collection, _id);
  let result = null;
  let error = null;
  try {
    result = await getDoc(docRef);
    if (result.exists()) {
      result = result.data();
    }
  } catch (e) {
    error = e;
  }
  return { result, error };
}
export async function setFirebaseDoc(_collection, _id, _bool) {
  await setDoc(doc(db, _collection, _id), { crash: _bool });
}

export default firebase_app;
