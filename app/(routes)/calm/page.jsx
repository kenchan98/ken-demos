"use client";

import { useRef } from "react";

export default function Page() {
  const refVideo = useRef();
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="fixed min-w-screen min-h-screen"
      ref={refVideo}
      onClick={() => {
        refVideo.current.muted = false;
        console.log(refVideo);
      }}
    >
      <source src="/videos/lavalamp2.mp4" type="video/mp4" />
      <source src="/videos/lavalamp2.webm" type="video/webm" />
    </video>
  );
}
