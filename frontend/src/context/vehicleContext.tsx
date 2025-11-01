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
}

const VehicleContext = createContext<VehicleContextProps>({
  selectedVehicle: null,
  setSelectedVehicle: () => {},
});

export const VehicleProvider = ({ children }: { children: ReactNode }) => {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType | null>(null);

  return (
    <VehicleContext.Provider value={{ selectedVehicle, setSelectedVehicle }}>
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicle = () => useContext(VehicleContext);

