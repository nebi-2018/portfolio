"use client";

import React, { createContext, useContext, useState } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];
type ActiveSectionProviderProps = { children: React.ReactNode };
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

const AxtiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

const AxtiveSectionContextProvider = ({
  children,
}: ActiveSectionProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  return (
    <AxtiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
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
