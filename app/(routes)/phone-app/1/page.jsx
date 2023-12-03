"use client";

import Circle from "@/app/_components/circle";
import Image from "next/image";
import image from "@/public/images/app_img_0.png";
import { motion } from "framer-motion";
import PhoneAppHeader from "@/app/_components/phoneApp-header";
import PhoneAppBottom from "@/app/_components/phoneApp-bottom";

export default function Page() {
  return (
    <div className="flex flex-col text-white items-center w-full min-h-screen bg-black">
      {/* ====== TOP ====== */}
      <PhoneAppHeader />
      {/* ====== MIDDLE ====== */}
      <motion.div
        className="flex flex-col grow items-center mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Image width="200" height="200" src={image} alt="graphic" />
        <h1 className="flex text-center m-6 text-3xl font-bold">
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
      <PhoneAppBottom title="Begin" linkTo="./2" />
    </div>
  );
}
