"use client";

import { useEffect, useState } from "react";
import { useAnimate, useAnimationControls, motion } from "framer-motion";

export default function IconThumbs(props) {
  const wrapperVariants = {
    hidden: {
      scale: 0.5,
    },
    visible: {
      scale: 1.5,
      transition: {
        type: "spring",
        damping: 10,
        mass: 0.75,
        stiffness: 100,
        duration: 0.1,
      },
    },
    exit: {
      scale: 0.5,
    },
  };
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start("visible");
  }, [props.imgDataList]);
  /*const [animationStarted, setAnimationStarted] = useState(false);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "span",
      {
        height: animationStarted ? 100 : 0,
      },
      {
        type: "spring",
        bounce: 0.8,
        duration: 0.8,
      }
    );
  }, [animationStarted]);*/
  /*const [imgDataList, setImgDataList] = useState(props.imgDataList);
  const [latestImgPath, setLatestImgPath] = useState(null);
  //
  useEffect(() => {
    //setLatestImgPath();
    console.log(imgDataList);
  }, [imgDataList]);
  //
*/
  return (
    <div className="flex justify-end relative">
      <img
        className="object-cover w-16 h-16 m-2 rounded-2xl"
        alt="thumbs"
        src={props.imgDataList[props.imgDataList.length - 1]}
      />
      {/*<div className="absolute top-0 right-0 text-center w-6 h-6 bg-blue-500 rounded-full">
        {props.imgDataList.length}
  </div>*/}
      <div className="flex absolute top-0 right-0 text-2xl justify-center items-center w-16 h-16 m-2 bg-black/50 rounded-2x1 ">
        <motion.h1
          variants={wrapperVariants}
          initial="hidden"
          animate={controls}
          onAnimationComplete={console.log("DONE")}
          onCompositionEnd={console.log("ENDED")}
        >
          {props.imgDataList.length}
        </motion.h1>
      </div>
    </div>
  );
}
