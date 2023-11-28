"use client";

import { DataContext } from "@/app/_providers/context";
import { useState } from "react";

export default function Layout({ children }) {
  const [imgDataList_1, setImgDataList_1] = useState([]);
  const [imgDataList_2, setImgDataList_2] = useState([]);
  const [imgDataList_3, setImgDataList_3] = useState([]);

  return (
    <DataContext.Provider
      value={{
        imgData_1: [imgDataList_1, setImgDataList_1],
        imgData_2: [imgDataList_2, setImgDataList_2],
        imgData_3: [imgDataList_3, setImgDataList_3],
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
