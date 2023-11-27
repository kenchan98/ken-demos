"use client";

import Button from "@/app/_components/button-app";
import Circle from "@/app/_components/circle";
import Image from "next/image";
import image from "@/public/images/app_img_0.png";
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
          Collection information
        </h1>
        <p>Take 5 minutes to complete 3 steps</p>
        <div className="flex m-2 p-4">
          <Circle />
          <Circle />
          <Circle />
        </div>
      </motion.div>
      {/* ====== BOTTOM ====== */}
      <div className="flex flex-none items-center justify-center h-36 w-full bg-gray-900">
        <Link href="./2">
          <Button>Begin</Button>
        </Link>
      </div>
    </div>
  );
}
