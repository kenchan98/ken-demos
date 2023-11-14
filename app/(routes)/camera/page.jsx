"use client";

import Webcam from "react-webcam";
import style from "./style.module.css";
export default function CameraPage() {
  const videoConstraints = {
    //width: { min: 240 },
    //height: { min: 720 },
    //aspectRatio: 0.6666666667,
    facingMode: "user",
    //facingMode: { exact: "environment" }
  };

  return (
    <div className={style.App}>
      <Webcam
        audio={false}
        imageSmoothing={true}
        screenshotFormat="image/jpeg"
        mirrored={true}
        videoConstraints={videoConstraints}
      />
    </div>
  );
}
