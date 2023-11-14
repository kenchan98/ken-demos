"use client";

import Webcam from "react-webcam";
import style from "./style.module.css";
import { useState, useRef } from "react";
import Image from "next/image";
import loadingIcon from "../../../public/images/grid.svg";

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
  const refWebcam = useRef();

  //console.log(process.env.PLATE_RECOGNIZER_KEY);
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
        Authorization: "Token 925de5e38a4e63269810ab02ec9fb9165054ef85", //`Token ${process.env.PLATE_RECOGNIZER_KEY}`, //, //process.env.PLATE_RECOGNIZER_KEY,
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
          //setPlateNumber("No vehicle detected");
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
  function capturePress() {
    const img = refWebcam.current.getScreenshot();
    setImgData(img);
    setIsDataFetched(false);
    // send image to Plate Recognizer
    request_PlateRecognizer(img);
    //request_DVLA("GV62HKP");
  }
  /*


  */
  return (
    <div className="flex min-h-screen flex-col items-center">
      {!imgData && (
        <div className={style.cameraContainer}>
          <Webcam
            audio={false}
            imageSmoothing={true}
            screenshotFormat="image/jpeg"
            mirrored={false}
            videoConstraints={videoConstraints}
            ref={refWebcam}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
            onClick={capturePress}
          >
            Take photo
          </button>
        </div>
      )}
      {
        imgData && (
          <div className={style.cameraContainer}>
            <img src={imgData} />
            <div className="flex flex-col items-center justify-center h-1/2">
              {!isDataFetched ? (
                <Image width="40" src={loadingIcon} />
              ) : (
                <div>
                  <div className="text-5xl p-10">{plateNumber}</div>
                  <div className="text-2xl p-2">
                    {make} : {colour}
                  </div>
                  <div className="text-2xl p-2">
                    Register Date : {registerDate}
                  </div>
                  <div className="text-2xl p-2">
                    Tax Status : {vehicleTaxStatus}
                  </div>
                  <div className="text-2xl p-2">MOT Status : {motStatus}</div>
                  <div className="text-2xl p-2">
                    MOT Expiry Date : {motExpiryDate}
                  </div>
                </div>
              )}
            </div>
          </div>
        )
        //imgData && console.log(imgData)
      }
    </div>
  );
}
