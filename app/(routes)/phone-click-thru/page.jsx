"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import useSound from "use-sound";

export default function Page() {
  const [index, setIndex] = useState(1);
  const [imgFile, setImgFile] = useState("/images/app_screens/1.png");
  const [clickSound] = useSound("/sound/sound-click-4.mp3");

  function updateImgPath(step) {
    let newValue;
    if (step === "+") {
      if (index < 22) {
        newValue = index + 1;
      } else {
        newValue = 22;
      }
    } else if (step === "-") {
      if (index > 2) {
        newValue = index - 1;
      } else {
        newValue = 1;
      }
    }
    setIndex(newValue);
  }

  useEffect(() => {
    const path = "/images/app_screens/" + index + ".png";
    setImgFile(path);
    //console.log(path);
  }, [index]);

  return (
    <div className="fixed w-full h-full bg-black">
      <Image
        fill={true}
        src={imgFile}
        alt="static image"
        onClick={() => {
          updateImgPath("+");
        }}
      />
      <div
        className="fixed w-full h-16 bg-black/1"
        onClick={() => {
          updateImgPath("-");
          clickSound();
        }}
      ></div>
    </div>
  );
}
