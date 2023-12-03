"use client";

import Button from "@/app/_components/phoneApp-button";
import PhoneAppHeader from "@/app/_components/phoneApp-header";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col text-white items-center w-full min-h-screen bg-black">
      {/* ====== TOP ====== */}
      <PhoneAppHeader buttonBack title="Car Damage Inspection" />

      {/* ====== MIDDLE ====== */}
      <div className="flex flex-col w-full grow items-center ">
        <video autoPlay muted loop playsInline className="min-w-screen">
          <source
            src="https://firebasestorage.googleapis.com/v0/b/ken-demo-d95fe.appspot.com/o/videos%2FcarDamage_inspection_ai.mp4?alt=media&token=6feec8f2-31ba-4bcb-af76-8f4251de4932"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <h1 className="flex text-center m-6">
          You can use your camera to inspect any damages to your vehicle. Try it
          yourself in the next screen.
        </h1>
      </div>

      {/* ====== BOTTOM ====== */}
      <div className="flex fixed bottom-0 items-center justify-center h-1/6 w-full bg-gray-900">
        <Link href="./2">
          <Button>Next</Button>
        </Link>
      </div>
    </div>
  );
}
