import React, { createContext, useContext, useState, useMemo } from "react";
import { type SimulatorContextType, type SimulatorData } from "./types";

export const SimulatorContext = createContext<SimulatorContextType>({
  simulatorData: { userName: "", responsesByStep: {} },
  setSimulatorData: () => {
    throw new Error("setSimulatorData was used outside of SimulatorProvider");
  },
});

export const useSimulatorContext = () => {
  const context = useContext(SimulatorContext);
  return context;
};

interface SimulatorProviderProps {
  children: React.ReactNode;
}

export const SimulatorProvider: React.FC<SimulatorProviderProps> = ({
  children,
}) => {
  const [simulatorData, setSimulatorData] = useState<SimulatorData>({
    userName: "",
    responsesByStep: {},
  });

  const value = useMemo(
    () => ({ simulatorData, setSimulatorData }),
    [simulatorData]
  );

  return (
    <SimulatorContext.Provider value={value}>
      {children}
    </SimulatorContext.Provider>
  );
};
