"use client";

import { setFirebaseDoc } from "@/libs/firebase";
import useSound from "use-sound";

export default function FnolControl() {
  const [soundCrash] = useSound("/sound/sound-crash.mp3");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-6 rounded m-4"
        onClick={() => {
          setFirebaseDoc("fnol", "signal", true);
          soundCrash();
        }}
      >
        Send Crash Notification
      </button>
    </div>
  );
}
