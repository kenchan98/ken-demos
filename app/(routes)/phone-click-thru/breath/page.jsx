"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Page() {
  const [scale, setScale] = useState(1.1);
  const [rotate, setRotate] = useState(30);

  /*useEffect(() => {
    setInterval(() => {
      //const value = rotate + 2;
      setRotate(rotate + 1);
      console.log(rotate);
    }, 2000);
  }, []);*/

  return (
    <div className="fixed w-full h-full bg-black">
      <Image
        fill={true}
        src="/images/app_screens/22.png"
        alt="static image"
        onClick={() => {}}
      />
      <div className="flex fixed w-full h-full justify-center items-center">
        <motion.div
          className=""
          animate={{ scale, rotate }}
          transition={{
            type: "just",
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          onAnimationEnd={console.log("---")}
          onAnimationComplete={console.log("fnished")}
        >
          <Image
            width="300"
            height="300"
            src="/images/app_screens/breath.png"
            alt="breath image"
            onMouseDown={() => {
              setScale(1.07);
              console.log("down");
            }}
            onMouseUp={() => {
              setScale(1.5);
              console.log("up");
            }}
          />
        </motion.div>
      </div>
      <div className="fixed w-full h-16 bg-black/1" onClick={() => {}}></div>
    </div>
  );
}
