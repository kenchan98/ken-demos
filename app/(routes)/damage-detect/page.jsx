"use client";

import Webcam from "react-webcam";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { uploadToStorage } from "@/libs/firebase";
import iconLoad from "../../../public/images/icon_loading.svg";
import iconClose from "../../../public/images/icon_close.svg";
import axios from "axios";
import useSound from "use-sound";
import PhoneAppHeader from "@/app/_components/header-app";
import { dataURItoBlob } from "@/libs/imageHelper";

export default function numberPlateRecognition() {
  const refWebcam = useRef();
  const refCanvas = useRef();
  const [imgData, setImgData] = useState(null);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [severity, setSeverity] = useState("");
  const [clickSound] = useSound("/sound/sound-click-1.mp3");

  useEffect(() => {
    if (imgData != null) {
      // convert the imgData to a blob for firebase storage
      const img = dataURItoBlob(imgData);
      //console.log(imgData);
      sendToFirebaseStorage(img);
    }
  }, [imgData]);
  /*
      =======================
      capture button clicked
  */
  function onClickCheckButton() {
    const img = refWebcam.current.getScreenshot();
    if (img) {
      setImgData(img);
      clickSound();
    }
  }
  /*


  */
  function resetResult() {
    setImgData(null);
    setSeverity("");
    setIsDataFetched(false);
    //
    var context = refCanvas.current.getContext("2d");
    context.clearRect(0, 0, refCanvas.current.width, refCanvas.current.height);
  }
  /*
      ==============================
      send image to firebase storage
  */
  function sendToFirebaseStorage(_img) {
    // set this flag to false in order to show the loading spinner
    setIsDataFetched(false);
    const imagePathOnStorage = "images/damage-detect.png";
    uploadToStorage(_img, imagePathOnStorage).then((imgURL) => {
      // send it over to roboflow for detection
      sendToRoboflowForDetection(imgURL);
    });
  }
  /*
      ==============================
      send image to firebase storage
  */
  function sendToRoboflowForDetection(imgPath) {
    axios({
      method: "POST",
      url: "https://detect.roboflow.com/dm-vx4s7/3",
      //url: "https://outline.roboflow.com/damage_severity/1",
      //url: "https://detect.roboflow.com/damagedetection4classfinal/7",
      //url: "https://outline.roboflow.com/car-damages-abjy0/1",
      params: {
        api_key: "zbiv06vujzjR0Zk07QJT",
        image: imgPath,
      },
    })
      .then(function (response) {
        console.log(response.data);
        const data = response.data;
        if (data.predictions.length > 0) {
          const result = data.predictions[0];
          setSeverity(result.class.toUpperCase());
          const w = data.image.width;
          const h = data.image.height;
          refCanvas.current.width = w;
          refCanvas.current.height = h;
          var context = refCanvas.current.getContext("2d");
          context.clearRect(0, 0, w, h);
          context.lineWidth = 3;
          context.strokeStyle = "red";
          context.rect(
            result.x / 2,
            result.y / 2,
            result.width / 2,
            result.height / 2
          );
          context.stroke();
          setIsDataFetched(true);
        } else {
          setSeverity("No damage detected!");
          setIsDataFetched(true);
        }
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }
  /*


 */
  return (
    <div className="flex h-full flex-col items-center bg-black select-none">
      {!imgData && (
        <div className="flex flex-col text-white items-center w-full min-h-screen bg-black">
          <PhoneAppHeader title="Car Damage Detection" />
          <Webcam
            audio={false}
            imageSmoothing={true}
            screenshotFormat="image/jpeg"
            mirrored={false}
            videoConstraints={{ facingMode: "environment" }}
            ref={refWebcam}
          />
          <button
            className="bg-gray-50 hover:bg-blue-300 text-black font-bold py-2 px-4 rounded m-4 w-1/3"
            onClick={onClickCheckButton}
          >
            Check
          </button>
        </div>
      )}
      {imgData && (
        <div className="flex flex-col w-full h-full min-h-screen text-white">
          {/* ======== TOP ========= */}
          <div className="w-full h-12 text-white flex items-center justify-end p-4 bg-black sticky top-0">
            <Image
              width="20"
              height="20"
              src={iconClose}
              onClick={resetResult}
              alt="close button"
            />
          </div>
          {/* ======== IMAGE ========= */}
          <div className="relative">
            <img className="absolute" src={imgData} />
            <div className="absolute h-1/2 w-full text-2xl">
              <canvas ref={refCanvas} />
            </div>
          </div>
          {/* ======== BOTTOM ========= */}
          <div className="flex grow w-full items-center justify-center text-white text-4xl text-center">
            {!isDataFetched ? (
              <Image
                className="m-4"
                width="40"
                src={iconLoad}
                alt="loading spinner"
              />
            ) : (
              <>{severity}</>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
