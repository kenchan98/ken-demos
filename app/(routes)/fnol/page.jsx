"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PhonePage() {
  const pathName = usePathname();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href={pathName + "/control"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
          control
        </button>
      </Link>
      <Link href={pathName + "/phone"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
          Phone
        </button>
      </Link>
      <Link href={pathName + "/desktop"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
          Desktop
        </button>
      </Link>
    </main>
  );
}
