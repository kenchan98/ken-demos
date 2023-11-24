"use client";

import { useEffect, useState } from "react";

export default function IconThumbs(props) {
  /*const [imgDataList, setImgDataList] = useState(props.imgDataList);
  const [latestImgPath, setLatestImgPath] = useState(null);
  //
  useEffect(() => {
    //setLatestImgPath();
    console.log(imgDataList);
  }, [imgDataList]);
  //
*/
  return (
    <div className="flex justify-end relative">
      <img
        className="object-cover w-16 h-16 m-2 rounded-2xl"
        alt="thumbs"
        src={props.imgDataList[props.imgDataList.length - 1]}
      />
      {/*<div className="absolute top-0 right-0 text-center w-6 h-6 bg-blue-500 rounded-full">
        {props.imgDataList.length}
  </div>*/}
      <div className="flex absolute top-0 right-0 text-2xl justify-center items-center w-16 h-16 m-2 bg-black/50 rounded-2x1">
        {props.imgDataList.length}
      </div>
    </div>
  );
}
