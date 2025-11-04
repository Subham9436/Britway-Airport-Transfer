import React from "react";
import type { features } from "../constants";
import { useVehicle } from "../context/vehicleContext";

interface Vehicle {
  id: number;
  name: string;
  image: string;
  description: string;
  passengers: number;
  checkIn: number;
  handLuggage: number;
  features: features[];
  oneWayPrice: number;
  returnPrice: number;
  discountPrice?: number;
}

interface Props {
  vehicle: Vehicle;
  onSelect: React.Dispatch<React.SetStateAction<number | null>>;
  selectedId: number | null;
}

const VehicleCard: React.FC<Props> = ({ vehicle }) => {
  const { selectedVehicle, setSelectedVehicle } = useVehicle();
  const isSelected = selectedVehicle?.id === vehicle.id;

  return (
    <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden mb-6 bg-white hover:shadow-md transition-all">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 items-center">
        {/*  Vehicle Image */}
        <div className="flex justify-center items-center">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-68 h-48 md:w-64 md:h-64 object-contain"
          />
        </div>

        {/* Vehicle Details */}
        <div className="md:col-span-2 flex flex-col justify-between h-full">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-2">
            <h2 className="text-lg font-bold uppercase text-gray-800 text-center sm:text-left">
              {vehicle.name}
            </h2>

            <button
              onClick={() => setSelectedVehicle(vehicle)}
              className={`px-4 py-2 rounded font-semibold text-white w-full sm:w-auto transition-all ${
                isSelected
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-red-700 hover:bg-red-800"
              }`}
            >
              {isSelected ? "Selected" : "Select Vehicle"}
            </button>
          </div>

          <p className="text-gray-600 text-sm mb-3 font-semibold">
            {vehicle.description}
          </p>

          {/* Capacity */}
          <div className="flex flex-wrap gap-4 text-sm mb-3 text-gray-700">
            <span className="flex bg-gray-200 rounded p-2">
              <img src="../img/users-alt.png" className="size-4 mr-1 mt-1" />
              <h3>{vehicle.passengers} Passengers</h3>
            </span>
            <span className="flex bg-gray-200 rounded p-2">
              <img src="../img/luggage.png" className="size-4 mr-1 mt-1" />
              <h3>{vehicle.checkIn} Check-In</h3>
            </span>
            <span className="flex bg-gray-200 rounded p-2">
              <img src="../img/woman-bag.png" className="size-4 mr-1 mt-1" />
              <h3>{vehicle.handLuggage} Hand Luggage</h3>
            </span>
          </div>

          {/* Features */}
          <ul className="text-sm text-gray-700 divide-y divide-gray-200 mb-3 cursor-pointer">
            {vehicle.features.map((f, i) => (
              <li
                key={i}
                className="flex justify-between py-1 text-gray-800 text-sm"
              >
                <span>{f.label}</span>
                <span className="text-red-700 font-semibold">{f.value}</span>
              </li>
            ))}
          </ul>

          {/* Pricing */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <div className="flex justify-between items-center flex-1 border rounded p-3 bg-gray-50">
              <span className="font-medium text-gray-700">One Way</span>
              <span className="font-bold text-gray-900">
                £{vehicle.oneWayPrice}
              </span>
            </div>

            <div className="flex justify-between items-center flex-1 border rounded p-3 bg-gray-50">
              <span className="font-medium text-gray-700">Return</span>
              <span className="font-bold text-gray-900">
                {vehicle.discountPrice ? (
                  <>
                    <span className="line-through text-gray-400 mr-2">
                      £{vehicle.returnPrice}
                    </span>
                    £{vehicle.discountPrice}
                    <span className="ml-2 bg-yellow-400 text-xs font-bold px-2 py-0.5 rounded">
                      £{vehicle.returnPrice - vehicle.discountPrice} OFF
                    </span>
                  </>
                ) : (
                  <>£{vehicle.returnPrice}</>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
