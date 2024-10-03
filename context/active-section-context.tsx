"use client";

import React, { createContext, useState } from "react";
import type { SectionName } from "@/lib/types";

type ActiveSectionContextProviderProps = { children: React.ReactNode };

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;

export function useActiveSectionContext() {
  const context = React.useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSection must be used within a ActiveSectionContextProvider"
    );
  }
  return context;
}
