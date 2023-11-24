"use client";

import Webcam from "react-webcam";
import CameraButton from "@/app/_components/button-camera";
import { useRef, useState, useEffect } from "react";
import useSound from "use-sound";
import { motion } from "framer-motion";
import IconThumbs from "@/app/_components/icon-thumbs";
//
//
export default function CameraPage() {
  const [imgDataList, setImgDataList] = useState([]);
  const refWebcam = useRef();
  const [clickSound] = useSound("/sound/sound-click-1.mp3");
  /*


  */
  const videoConstraints = {
    aspectRatio: 0.8,
    facingMode: "user",
    //facingMode: { exact: "environment" }
  };

  useEffect(() => {
    console.log(imgDataList);
  }, [imgDataList]);
  /*
      =======================
      cpature button clicked
  */
  function capturePress() {
    const img = refWebcam.current.getScreenshot();
    setImgDataList([...imgDataList, img]);
    //
    clickSound();
  }

  return (
    <div className="flex flex-col text-white items-center w-full min-h-screen bg-black">
      {/* ====== TOP ====== */}
      <div className="h-12 flex-none w-full text-white bg-gray-900">
        <div className="text-blue-600 m-4">BACK</div>
      </div>
      {/* ====== MIDDLE ====== */}
      <div className="flex flex-col w-full grow items-center ">
        <Webcam
          className="items-start"
          audio={false}
          imageSmoothing={true}
          screenshotFormat="image/jpeg"
          mirrored={true}
          videoConstraints={videoConstraints}
          ref={refWebcam}
        />
        <motion.h1
          className="flex text-center m-8 text-4xl font-bold"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 5 }}
        >
          Take photos of the crash scene
        </motion.h1>
      </div>
      {/* ====== BOTTOM ====== */}
      <div className="flex flex-none items-center justify-center h-36 w-full bg-gray-900">
        <div className="w-1/3"></div>
        <CameraButton onPressed={capturePress} />
        <div className="w-1/3">
          {imgDataList.length > 0 && <IconThumbs imgDataList={imgDataList} />}
        </div>
      </div>
    </div>
  );
  /*
  return (
    <div className={style.App}>
      <div className="flex flex-col items-start w-full h-full">
        <div className="h-40 text-white">HEADING</div>
        
        <div className="flex justify-center bg-red-200 w-full h-full">
                  {imgDataList.map((img, index) => (
          <img width="200" height="200" key={index} src={img} alt="image" />
        ))}
        </div>
      </div>
    </div>
  );*/
}
