"use client";

import Button from "@/app/_components/button-app";
import Circle from "@/app/_components/circle";
import Image from "next/image";
import image from "@/public/images/app_img_1.png";
import iconCamera from "@/public/images/icon-camera.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import PhoneAppHeader from "@/app/_components/header-app";

export default function Page() {
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
        <Image width="200" height="200" src={image} alt="graphic" />
        <h1 className="flex text-center m-8 text-4xl font-bold">
          Take photos of the scene
        </h1>
        <p className="text-black">-</p>
        <div className="flex m-2 p-4">
          <Circle solid />
          <Circle />
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
