"use client";

import useSound from "use-sound";

export default function Button(props) {
  const [clickSound] = useSound("/sound/sound-click-4.mp3");

  return (
    <button
      className="flex items-center justify-center h-12 w-40 m-4 px-6 bg-blue-800 text-white rounded-full"
      onClick={() => {
        clickSound();
      }}
    >
      {props.children}
    </button>
  );
}
