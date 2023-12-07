"use client";

import { SectionName } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

type ActiveSectionProviderProps = { children: React.ReactNode };

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const AxtiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

const AxtiveSectionContextProvider = ({
  children,
}: ActiveSectionProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <AxtiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </AxtiveSectionContext.Provider>
  );
};

export const useActiveSectionConext = () => {
  const context = useContext(AxtiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
};

export default AxtiveSectionContextProvider;
