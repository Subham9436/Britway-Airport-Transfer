import { useState } from "react";

export default function BookingForm() {
  const [tripType, setTripType] = useState("airport-pickup");
  const [dropType, setDropType] = useState("local-drop");

  return (
    <div>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-6 border border-gray-300">
        {/* Pickup Section */}
        <div>
          <div className="flex gap-6 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="pickupType"
                value="airport-pickup"
                checked={tripType === "airport-pickup"}
                onChange={() => setTripType("airport-pickup")}
              />
              <span className="font-semibol">Airport Pickup</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="pickupType"
                value="local-pickup"
                checked={tripType === "local-pickup"}
                onChange={() => setTripType("local-pickup")}
              />
              <span className="font-semibold">Local Address Pickup</span>
            </label>
          </div>

          <div className="border rounded p-3">
            <label className="block font-medium mb-1">Pick Up *</label>
            <select className="w-full border rounded p-2">
              <option>--Select Airport--</option>
              <option>Delhi Airport</option>
              <option>Mumbai Airport</option>
            </select>
          </div>
        </div>

        {/* Drop-off Section */}
        <div>
          <div className="flex gap-6 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="dropType"
                value="airport-drop"
                checked={dropType === "airport-drop"}
                onChange={() => setDropType("airport-drop")}
              />
              <span className="font-semibold">Airport Drop-off</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="dropType"
                value="local-drop"
                checked={dropType === "local-drop"}
                onChange={() => setDropType("local-drop")}
              />
              <span className="font-semibold">Local Address Drop-off</span>
            </label>
          </div>

          <div className="border rounded p-3">
            <label className="block font-medium mb-1">Drop-off *</label>
            <input
              type="text"
              placeholder="--Enter a location--"
              className="w-full border rounded p-2"
            />
          </div>
        </div>

        {/* Flight Details */}
        <div className="border rounded p-3">
          <label className="block font-medium mb-1">Flight Number *</label>
          <input
            type="text"
            placeholder="Enter flight number"
            className="w-full border rounded p-2"
          />
        </div>

        <div className="border rounded p-3">
          <label className="block font-medium mb-1">Pick Up Wait Time *</label>
          <select className="w-full border rounded p-2">
            <option>--Select--</option>
            <option>15 min</option>
            <option>30 min</option>
            <option>1 hr</option>
          </select>
        </div>

        {/* Customer Requirement */}
        <button className="text-red-600 font-semibold underline">
          + Customer Requirement
        </button>

        {/* Pickup Date & Time */}
        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded p-3">
            <label className="block font-medium mb-1">Pickup Date *</label>
            <input type="date" className="w-full border rounded p-2" />
          </div>
          <div className="border rounded p-3">
            <label className="block font-medium mb-1">Pickup Time *</label>
            <input type="time" className="w-full border rounded p-2" />
          </div>
        </div>

        {/* Passenger Info */}
        <div className="border rounded p-3">
          <label className="block font-medium mb-1">
            Passengers (Including Children) *
          </label>
          <select className="w-full border rounded p-2">
            <option>--Select--</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4+</option>
          </select>
        </div>

        <div className="border rounded p-3">
          <label className="block font-medium mb-1">
            Number of Check-in Luggage *
          </label>
          <select className="w-full border rounded p-2">
            <option>--Select--</option>
            <option>0</option>
            <option>1</option>
            <option>2+</option>
          </select>
        </div>

        <div className="border rounded p-3">
          <label className="block font-medium mb-1">
            Number of Hand Luggage *
          </label>
          <select className="w-full border rounded p-2">
            <option>--Select--</option>
            <option>0</option>
            <option>1</option>
            <option>2+</option>
          </select>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}
