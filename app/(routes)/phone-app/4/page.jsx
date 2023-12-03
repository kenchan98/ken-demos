"use client";

import Button from "@/app/_components/phoneApp-button";
import Circle from "@/app/_components/circle";
import Image from "next/image";
import image from "@/public/images/app_img_2.png";
import iconCamera from "@/public/images/icon-camera.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import PhoneAppHeader from "@/app/_components/phoneApp-header";
import { useDataContext } from "@/app/_providers/context";
import PhoneAppBottom from "@/app/_components/phoneApp-bottom";

export default function Page() {
  // retrieve data from DataContext
  const { imgData_1 } = useDataContext();
  //
  return (
    <div className="flex flex-col text-white items-center w-full min-h-screen bg-black">
      {/* ====== TOP ====== */}
      <PhoneAppHeader buttonBack />
      {/* ====== MIDDLE ====== */}
      <motion.div
        className="flex flex-col grow items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="flex text-center m-6 text-3xl font-bold">
          Other party's vehicle
        </h1>
        <Image width="200" height="200" src={image} alt="graphic" />
        <h1 className="flex text-center m-6 text-2xl font-bold">
          Front damage has been detected
        </h1>
        <p className="text-center mx-8">
          Walk to the front of vehicle TW423L and take photos of what you can
          see
        </p>
        <div className="flex m-2 p-4">
          <Circle solid />
          <Circle solid />
          <Circle />
        </div>
      </motion.div>
      {/* ====== BOTTOM ====== */}
      <PhoneAppBottom title="Next" linkTo="./damage-detect/1" />
    </div>
  );
}
