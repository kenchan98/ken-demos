"use client";

import Webcam from "react-webcam";
import CameraButton from "@/app/_components/button-camera";
import { useRef, useState, useEffect } from "react";
import useSound from "use-sound";
import style from "./style.module.css";
import Image from "next/image";
//
//
export default function CameraPage() {
  const [imgDataList, setImgDataList] = useState([]);
  const refWebcam = useRef();
  const [clickSound] = useSound("/sound/sound-click-1.mp3");
  /*


  */
  useEffect(() => {
    console.log(imgDataList);
  }, [imgDataList]);
  const videoConstraints = {
    //width: { min: 240 },
    //height: { min: 720 },
    //aspectRatio: 0.6666666667,
    facingMode: "user",
    //facingMode: { exact: "environment" }
  };

  /*
      =======================
      cpature button clicked
  */
  function capturePress() {
    console.log("CLICKED _---- ");
    const img = refWebcam.current.getScreenshot();
    //
    setImgDataList([...imgDataList, img]);
    //
    clickSound();
  }

  return (
    <div className={style.App}>
      <div className="flex flex-col items-start w-full h-full">
        <div className="h-40 text-white">HEADING</div>
        <Webcam
          className="items-start"
          audio={false}
          imageSmoothing={true}
          screenshotFormat="image/jpeg"
          mirrored={true}
          videoConstraints={videoConstraints}
          ref={refWebcam}
        />
        <div className="flex justify-center bg-red-200 w-full h-full">
          <CameraButton onPressed={capturePress} />
          {imgDataList.map((img, index) => (
            <img width="200" height="200" key={index} src={img} alt="image" />
          ))}
        </div>
      </div>
    </div>
  );
}
