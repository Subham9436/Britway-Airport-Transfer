import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export interface VehicleType {
  id: number;
  name: string;
  passengers: number;
  checkIn: number;
  handLuggage: number;
  oneWayPrice: number;
  returnPrice: number;
  discountPrice?: number;
  image: string;
}

interface VehicleContextProps {
  selectedVehicle: VehicleType | null;
  setSelectedVehicle: (v: VehicleType | null) => void;
  resetVehicle: () => void;
}

const VehicleContext = createContext<VehicleContextProps>({
  selectedVehicle: null,
  setSelectedVehicle: () => {},
  resetVehicle: () => {},
});

export const VehicleProvider = ({ children }: { children: ReactNode }) => {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType | null>(
    null
  );

  const resetVehicle = () => {
    setSelectedVehicle(null);
  };

  return (
    <VehicleContext.Provider
      value={{ selectedVehicle, setSelectedVehicle, resetVehicle }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicle = () => useContext(VehicleContext);
