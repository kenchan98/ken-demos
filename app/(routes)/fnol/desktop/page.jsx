"use client";

import { useState, useEffect } from "react";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import firebase_app from "@/libs/firebase";
import useSound from "use-sound";
import { setFirebaseDoc } from "@/libs/firebase";

export default function FnolDesktop() {
  const [isFirestoreDataReceived, setIsFirestoreDataReceived] = useState(false);
  const [notification, setNotification] = useState(false);
  const [clockTime, setClockTime] = useState(null);
  const [soundNotif] = useSound("/sound/sound-notification.mp3");
  /*



  */
  useEffect(() => {
    // read value form firestore
    const db = getFirestore(firebase_app);
    onSnapshot(doc(db, "fnol", "signal"), (doc) => {
      // the result is expected to be like this - {crash: false}
      const bool = doc.data().crash;
      setIsFirestoreDataReceived(bool);
    });
  }, []);
  /*


  */
  useEffect(() => {
    if (isFirestoreDataReceived) {
      setTimeout(() => {
        setNotification(true);
        soundNotif();
      }, 5000);
    } else {
      setNotification(false);
    }
  }, [isFirestoreDataReceived]);
  /*



  */

  return (
    <div className="flex flex-col min-h-screen pt-6 bg-desktop-bg bg-cover bg-center bg-no-repeat items-end select-none">
      {notification && (
        <div
          className="flex flex-col w-1/4 m-6 p-4 rounded-lg bg-gray-200 shadow-lg "
          id="notification"
          onClick={() => {
            //setIsFirestoreDataReceived(false);
            //setNotification(false);
            setFirebaseDoc("fnol", "signal", false);
          }}
        >
          <div className="text-gray-400 p-2">FAM</div>
          <h1 className="text-2xl m-3 text-black">
            Driver Malik has an accident!
          </h1>
        </div>
      )}
    </div>
  );
}
