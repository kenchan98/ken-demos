"use client";

import { createContext, useState, useContext } from "react";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  return <DataContext.Provider>{children}</DataContext.Provider>;
}

export function useDataContext() {
  return useContext(DataContext);
}
