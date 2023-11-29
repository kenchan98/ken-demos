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
      <source
        src="https://firebasestorage.googleapis.com/v0/b/ken-demo-d95fe.appspot.com/o/videos%2FlavaLamp2.webm?alt=media&token=4d86fcd8-868a-4735-bd56-68ec00dacd03"
        type="video/webm"
      />
      Your browser does not support the video tag.
    </video>
  );
}
