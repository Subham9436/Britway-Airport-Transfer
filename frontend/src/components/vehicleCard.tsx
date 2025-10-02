import React from "react";

interface Vehicle {
  id: number;
  name: string;
  image: string;
  description: string;
  passengers: number;
  checkIn: number;
  handLuggage: number;
  features: { label: string; value: string }[];
  oneWayPrice: number;
  returnPrice: number;
  discountPrice?: number;
}

interface Props {
  vehicle: Vehicle;
  onSelect: (id: number) => void;
  selectedId: number | null;
}

const VehicleCard: React.FC<Props> = ({ vehicle, onSelect, selectedId }) => {
  const isSelected = selectedId === vehicle.id;

  return (
    <div className="border-zinc-950  rounded-lg shadow-md overflow-hidden mb-6">
      <div className="grid grid-cols-3 gap-4 p-4">
        {/* Car Image */}
        <div className="col-span-1 flex items-center justify-center">
          <img src={vehicle.image} alt={vehicle.name} className="w-32 h-20 object-contain border" />
        </div>

        {/* Vehicle Details */}
        <div className="col-span-2">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold uppercase">{vehicle.name}</h2>
            <button
              className={`px-4 py-1 rounded text-white font-semibold ${
                isSelected ? "bg-green-600" : "bg-red-600"
              }`}
              onClick={() => onSelect(vehicle.id)}
            >
              {isSelected ? "Selected" : "Select Vehicle"}
            </button>
          </div>

          <p className="text-gray-600 text-sm mb-2">{vehicle.description}</p>

          {/* Capacity */}
          <div className="flex gap-3 text-sm mb-3">
            <span>👥 {vehicle.passengers}</span>
            <span>🧳 Max {vehicle.checkIn}</span>
            <span>🎒 Max {vehicle.handLuggage}</span>
          </div>

          {/* Features */}
          <ul className="text-sm text-gray-700">
            {vehicle.features.map((f, i) => (
              <li key={i} className="flex justify-between border-b py-1">
                <span>{f.label}</span>
                <span className="text-red-600 font-semibold">{f.value}</span>
              </li>
            ))}
          </ul>

          {/* Pricing */}
          <div className="mt-3">
            <div className="flex justify-between items-center border-t py-2">
              <span>One way</span>
              <span className="font-bold">£{vehicle.oneWayPrice}</span>
            </div>
            <div className="flex justify-between items-center border-t py-2">
              <span>Return</span>
              <span className="font-bold">
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
