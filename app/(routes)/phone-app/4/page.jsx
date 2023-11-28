"use client";

import Button from "@/app/_components/button-app";
import Circle from "@/app/_components/circle";
import Image from "next/image";
import image from "@/public/images/app_img_2.png";
import iconCamera from "@/public/images/icon-camera.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import PhoneAppHeader from "@/app/_components/header-app";
import { useDataContext } from "@/app/_providers/context";

export default function Page() {
  // retrieve data from DataContext
  const { imgData_1 } = useDataContext();
  //
  return (
    <div className="flex flex-col text-white items-center w-full min-h-screen bg-black">
      {/* ====== TOP ====== */}
      <PhoneAppHeader />
      {/* ====== MIDDLE ====== */}
      <motion.div
        className="flex flex-col grow items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="flex text-center m-8 text-4xl font-bold">
          Other party's vehicle
        </h1>
        <Image width="200" height="200" src={image} alt="graphic" />
        <h1 className="flex text-center m-8 text-2xl font-bold">
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
      <div className="flex flex-none items-center justify-center h-36 w-full bg-gray-900">
        <Link href="./3">
          <Button>
            <Image src={iconCamera} alt="camera" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
