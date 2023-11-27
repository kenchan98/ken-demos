"use client";

import Webcam from "react-webcam";
import CameraButton from "@/app/_components/button-camera";
import { useRef, useState, useEffect } from "react";
import useSound from "use-sound";
import { motion } from "framer-motion";
import IconThumbs from "@/app/_components/icon-thumbs";
import Gallery from "@/app/_components/gallery";
import PhoneAppHeader from "@/app/_components/header-app";
//
//
export default function CameraPage() {
  const [imgDataList, setImgDataList] = useState([]);
  const [showGallery, setShowGallery] = useState(false);
  const refWebcam = useRef();
  const [clickSound] = useSound("/sound/sound-click-1.mp3");
  /*


  */
  const videoConstraints = {
    aspectRatio: 0.8,
    facingMode: "user",
    //facingMode: { exact: "environment" }
  };
  /*


  */
  function onClickBackButtonGallery() {
    setShowGallery(false);
  }
  function onPressGalleryIcon() {
    setShowGallery(true);
  }
  /*


  */
  useEffect(() => {
    console.log(imgDataList);
  }, [imgDataList]);
  /*
      =======================
      cpature button clicked
  */
  function capturePress() {
    const img = refWebcam.current.getScreenshot();
    if (img) {
      setImgDataList([...imgDataList, img]);
      //
      clickSound();
    }
  }

  return (
    <div className="flex flex-col text-white items-center w-full min-h-screen bg-black">
      {/* ====== TOP ====== */}
      <PhoneAppHeader />
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
        <div className="w-1/3" onClick={onPressGalleryIcon}>
          {imgDataList.length > 0 && <IconThumbs imgDataList={imgDataList} />}
        </div>
      </div>

      {/* ====== GALLERY ====== */
      /*<motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -900 }}
        className="relative block top-1/2 w-full h-full bg-red-300 "
      >
        <div className="absolute block w-1/2 h-full bg-green-300/50">
          GALLERY
        </div>
  </motion.div>*/}
      {showGallery && (
        <div className="absolute w-full h-full bg-green-300/50">
          <Gallery
            imgDataList={imgDataList}
            onClickBackButton={onClickBackButtonGallery}
          />
        </div>
      )}
    </div>
  );
}
