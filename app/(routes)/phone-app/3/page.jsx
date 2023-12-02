"use client";

import Webcam from "react-webcam";
import CameraButton from "@/app/_components/button-camera";
import Button from "@/app/_components/button-app";
import { useRef, useState, useEffect } from "react";
import useSound from "use-sound";
import { motion } from "framer-motion";
import IconThumbs from "@/app/_components/icon-thumbs";
import Gallery from "@/app/_components/gallery";
import PhoneAppHeader from "@/app/_components/header-app";
import Link from "next/link";
import { useDataContext } from "@/app/_providers/context";
//
//
export default function CameraPage() {
  const { imgData_1 } = useDataContext();
  const [imgDataList, setImgDataList] = imgData_1;
  const [showGallery, setShowGallery] = useState(false);
  const [clickSound] = useSound("/sound/sound-click-1.mp3");
  const refWebcam = useRef();
  /*


  */
  const videoConstraints = {
    //aspectRatio: 0.8,
    //facingMode: "user",
    facingMode: "environment",
  };
  /*


  */
  function onClickCloseButton() {
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
          mirrored={false}
          videoConstraints={videoConstraints}
          ref={refWebcam}
        />
        <motion.h1
          className="flex text-center m-8 text-4xl font-bold"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2 }}
        >
          Take photos of the crash scene
        </motion.h1>
      </div>
      {/* ====== BOTTOM ====== */}
      {!showGallery && (
        <div className="flex fixed bottom-0 items-center justify-center h-1/6 w-full bg-gray-900">
          <div className="w-1/3"></div>
          {imgDataList.length < 30 ? (
            <CameraButton onPressed={capturePress} />
          ) : (
            <Link href="./4">
              <Button>Next</Button>
            </Link>
          )}
          <div className="w-1/3" onClick={onPressGalleryIcon}>
            {imgDataList.length > 0 && <IconThumbs imgDataList={imgDataList} />}
          </div>
        </div>
      )}

      {/* ====== GALLERY ====== */}
      {showGallery && (
        <div className="absolute w-full h-screen bg-black">
          <Gallery
            imgDataList={imgDataList}
            onClickCloseButton={onClickCloseButton}
          />
        </div>
      )}
    </div>
  );
}
