"use client";

import PhoneAppHeader from "@/app/_components/header-app";

export default function Page() {
  return (
    <div className="flex flex-wrap w-full h-full bg-red-100">
      {/* ====== TOP ====== */}
      <PhoneAppHeader />
      {/* ====== MIDDLE ====== */}
      <div className="flex w-full h-1/3 bg-blue-300 rounded-2xl">ABC</div>
      {/* ====== BOTTOM ====== */}
      <div className="fixed bottom-0 w-full h-36 bg-green-400">BOTTOM</div>
    </div>
  );
}
