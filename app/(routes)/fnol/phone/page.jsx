"use client";

import { useState, useEffect } from "react";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import firebase_app from "@/libs/firebase";
import useSound from "use-sound";
import { setFirebaseDoc } from "@/libs/firebase";

export default function FnolPhone() {
  const [isFirestoreDataReceived, setIsFirestoreDataReceived] = useState(false);
  const [notification, setNotification] = useState(false);
  const [clockTime, setClockTime] = useState(null);
  const [soundNotif] = useSound("/sound/sound-notification.mp3");
  const updateClockTime = () => {
    let _time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setClockTime(_time);
  };
  /*



  */
  useEffect(() => {
    updateClockTime();
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
      }, 8000);
    } else {
      setNotification(false);
    }
  }, [isFirestoreDataReceived]);
  /*



  */
  setInterval(updateClockTime, 60000);

  return (
    <div className="flex flex-col items-stretch min-h-screen bg-phone-bg bg-cover bg-center bg-no-repeat ">
      <div className="flex font-extralight text-8xl text-white w-full h-1/3 justify-center p-20">
        <h1>{clockTime}</h1>
      </div>
      {notification && (
        <div
          className="flex flex-col m-6 p-4 rounded-lg bg-gray-200"
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
