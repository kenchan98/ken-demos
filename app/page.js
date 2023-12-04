import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 ">
      {/*<Link href="./fnol">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
          FNOL crash
        </button>
  </Link>*/}
      <Link href="./cctv">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
          CCTV
        </button>
      </Link>
      <Link href="./phone-app/1">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
          Phone App
        </button>
      </Link>
      <Link href="./phone-click-thru">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
          Phone App (click thru)
        </button>
      </Link>
      <Link href="./phone-click-thru/breath">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
          Breathing exercise
        </button>
      </Link>
      {/*<Link href="./damage-detect">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
          Damage Detection
        </button>
</Link>*/}
      <Link href="./num-plate">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
          Number Plate Recognition
        </button>
      </Link>
    </main>
  );
}
