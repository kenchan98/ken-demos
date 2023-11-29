"use client";

import { useRef } from "react";

export default function Page() {
  const refVideo = useRef();
  return (
    <div className="min-w-screen min-h-screen">
      <video
        autoPlay
        muted
        controls
        loop
        playsInline
        className="w-1/2 h-1/2"
        ref={refVideo}
        onClick={() => {
          refVideo.current.muted = false;
          console.log(refVideo);
        }}
      >
        <source src="/videos/lavalamp2.mp4" type="video/mp4" />
        <source src="/videos/lavalamp2.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
