"use client";

import Webcam from "react-webcam";
import style from "./style.module.css";
import { useState, useRef } from "react";
import Image from "next/image";
import iconLoad from "../../../public/images/icon_loading.svg";
import iconClose from "../../../public/images/icon_close.svg";
import CarInfo from "@/app/_components/carInfo";
import Link from "next/link";
import useSound from "use-sound";

export default function numberPlateRecognition() {
  const [cameraMode, setCameraMode] = useState("environment");
  const [imgData, setImgData] = useState(null);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [plateNumber, setPlateNumber] = useState("");
  const [registerDate, setRegisterDate] = useState("");
  const [vehicleTaxStatus, setVehicleTaxStatus] = useState("");
  const [make, setMake] = useState("");
  const [colour, setColour] = useState("");
  const [motExpiryDate, setMotExpiryDate] = useState("");
  const [motStatus, setMotStatus] = useState("");
  const [noPlateRecognised, setNoPlateRecognised] = useState(false);
  const refWebcam = useRef();
  const [clickSound] = useSound("/sound/sound-click-1.mp3");

  console.log(
    "__ NEXT_PUBLIC_PLATE_RECOGNIZER_KEY __ : ",
    process.env.NEXT_PUBLIC_PLATE_RECOGNIZER_KEY
  );
  /*
      =======================
      video camera constraint
  */
  const videoConstraints = {
    //width: { min: 240 },
    //height: { min: 720 },
    //aspectRatio: 0.6666666667,
    facingMode: cameraMode,
    //facingMode: { exact: "environment" }
  };
  /* 
    =================================
    sending a request to local server
    in turn to make a request at DVLA
  */
  function request_DVLA(plateNum) {
    fetch("/api/dvla", {
      method: "POST",
      body: JSON.stringify({
        plateNum: plateNum,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsDataFetched(true);
        console.log(JSON.parse(data.data));
        const {
          registrationNumber,
          taxStatus,
          monthOfFirstRegistration,
          colour,
          make,
          motExpiryDate,
          motStatus,
        } = JSON.parse(data.data);
        setPlateNumber(registrationNumber);
        setRegisterDate(monthOfFirstRegistration);
        setVehicleTaxStatus(taxStatus);
        setMake(make);
        setColour(colour);
        setMotExpiryDate(motExpiryDate);
        setMotStatus(motStatus);
      });
  }
  /*
      ===============================
      send request to Plate Recognizer
  */
  function request_PlateRecognizer(imgData) {
    let body = new FormData(); //formdata object
    body.append("upload", imgData);
    fetch("https://api.platerecognizer.com/v1/plate-reader/", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.NEXT_PUBLIC_PLATE_RECOGNIZER_KEY}`, //"Token 925de5e38a4e63269810ab02ec9fb9165054ef85", //, //process.env.PLATE_RECOGNIZER_KEY,
      },
      body: body,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.results.length > 0) {
          const plateNum = json.results[0].plate.toUpperCase();
          request_DVLA(plateNum);
        } else {
          console.log(" no plate recognised!!!");

          setIsDataFetched(true);
          setNoPlateRecognised(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /*
      =======================
      cpature button clicked
  */
  function onClickCheckButton() {
    const img = refWebcam.current.getScreenshot();
    if (img) {
      setImgData(img);
      setIsDataFetched(false);
      // send image to Plate Recognizer
      request_PlateRecognizer(img);
      //request_DVLA("GV62HKP");
      clickSound();
    }
  }
  /*


  */
  function resetResult() {
    setImgData(null);
    setIsDataFetched(false);
    setNoPlateRecognised(false);
  }
  /*


  */
  return (
    <div className="flex h-full flex-col items-center bg-black select-none">
      {!imgData && (
        <div className={style.cameraContainer}>
          <Link href="/">
            <div className="h-10 text-white flex text-lg items-center place-content-center bg-black sticky top-0">
              Number Plate Recognition
            </div>
          </Link>

          <Webcam
            audio={false}
            imageSmoothing={true}
            screenshotFormat="image/jpeg"
            mirrored={false}
            videoConstraints={videoConstraints}
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
      {
        imgData && (
          <div className={style.cameraContainer}>
            <div className="w-full h-10 text-white flex items-center justify-end p-4 bg-black sticky top-0">
              <Image
                width="20"
                height="20"
                src={iconClose}
                onClick={resetResult}
                alt="close button"
              />
            </div>
            <img src={imgData} />
            <div className="flex flex-col items-center justify-center h-1/2 w-full">
              {!isDataFetched ? (
                <Image width="40" src={iconLoad} />
              ) : (
                <>
                  {noPlateRecognised ? (
                    <div className="text-white">No number plate recognised</div>
                  ) : (
                    <CarInfo
                      plateNumber={plateNumber}
                      registerDate={registerDate}
                      vehicleTaxStatus={vehicleTaxStatus}
                      colour={colour}
                      make={make}
                      motExpiryDate={motExpiryDate}
                      motStatus={motStatus}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        )
        //imgData && console.log(imgData)
      }
    </div>
  );
}
