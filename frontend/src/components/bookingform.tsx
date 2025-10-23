import { useState } from "react";
import { airports } from "../constants/constantValues";

export default function BookingForm() {
  const [tripType, setTripType] = useState("airport-pickup");
  const [dropType, setDropType] = useState("local-drop");
  const [customerRequirement, setCustomerRequirement] = useState("customer-requirement");
  return (
    <div className="border border-gray-300  rounded-lg shadow-md overflow-hidden mb-6 p-2">
      <div className="w-full max-w-2xl mx-auto">
        {/* Tabs */}
        <div className="flex rounded-t-lg overflow-hidden text-sm font-semibold">
          <button
            onClick={() => setTripType("airport")}
            className={`flex-1 px-4 py-3 text-left rounded-t-lg  transition-all duration-200 ${
              tripType === "airport"
                ? "bg-red-700 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <input
              type="radio"
              name="tripType"
              checked={tripType === "airport"}
              onChange={() => setTripType("airport")}
              className="mr-2"
            />
            Airport Pickup
          </button>

          <button
            onClick={() => setTripType("local")}
            className={`flex-1 px-4 py-3 text-left rounded-t-lg  transition-all duration-200 ${
              tripType === "local"
                ? "bg-red-700 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <input
              type="radio"
              name="tripType"
              checked={tripType === "local"}
              onChange={() => setTripType("local")}
              className="mr-2"
            />
            Local Address Pickup
          </button>
        </div>

        {/* Conditional Section */}
        <div className="border border-red-700 rounded-b-lg p-4 bg-white">
          {tripType === "airport" ? (
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                PICK UP <span className="text-red-700">*</span>
              </label>
              <div className="flex items-center border rounded px-3 py-2 space-x-2">
                {/* <MapPin size={18} className="text-gray-600" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>

                <select className="w-full outline-none bg-transparent font-semibold text-gray-800">
                  <option>--Select Airport--</option>
                  {airports.map((airport, index) => (
                    <option key={index}>{airport}</option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                PICK UP ADDRESS <span className="text-red-600">*</span>
              </label>
              <div className="flex items-center border rounded px-3 py-2 space-x-2">
                {/* <MapPin size={18} className="text-gray-600" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Enter Pickup Address"
                  className="w-full outline-none bg-transparent font-semibold text-gray-800"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full max-w-2xl mx-auto mt-4">
        {/* Tabs */}
        <div className="flex rounded-t-lg overflow-hidden text-sm font-semibold">
          <button
            onClick={() => setDropType("airport")}
            className={`flex-1 px-4 py-3 text-left rounded-t-lg  transition-all duration-200 ${
              dropType === "airport"
                ? "bg-red-700 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <input
              type="radio"
              name="dropType"
              checked={dropType === "airport"}
              onChange={() => setDropType("airport")}
              className="mr-2"
            />
            Airport Drop-Off
          </button>

          <button
            onClick={() => setDropType("local")}
            className={`flex-1 px-4 py-3 text-left rounded-t-lg  transition-all duration-200 ${
              dropType === "local"
                ? "bg-red-700 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <input
              type="radio"
              name="dropType"
              checked={dropType === "local"}
              onChange={() => setDropType("local")}
              className="mr-2"
            />
            Local Address Drop-Off
          </button>
        </div>

        {/* Conditional Section */}
        <div className="border border-red-700 rounded-b-lg p-4 bg-white">
          {dropType === "airport" ? (
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                PICK UP <span className="text-red-700">*</span>
              </label>
              <div className="flex items-center border rounded px-3 py-2 space-x-2">
                {/* <MapPin size={18} className="text-gray-600" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <select className="w-full outline-none bg-transparent font-semibold text-gray-800">
                  <option>--Select Airport--</option>
                  {airports.map((airport, index) => (
                    <option key={index}>{airport}</option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                PICK UP ADDRESS <span className="text-red-600">*</span>
              </label>
              <div className="flex items-center border rounded px-3 py-2 space-x-2">
                {/* <MapPin size={18} className="text-gray-600" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Enter Pickup Address"
                  className="w-full outline-none bg-transparent font-semibold text-gray-800"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {tripType === "airport" && (
        <div>
          <div className="border border-gray-300 rounded-lg mt-4 p-2">
            <label className="block font-semibold text-gray-700 mb-2">
              Flight Number <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center border rounded px-3 py-2 space-x-2">
              {/* <MapPin size={18} className="text-gray-600" /> */}
              <img
                src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/flight.svg"
                className="size-6"
              ></img>
              <input
                type="text"
                placeholder="Enter Pickup Address"
                className="w-full outline-none bg-transparent font-semibold text-gray-800"
              />
            </div>
          </div>
        </div>
      )}
      {tripType === "airport" && (
        <div>
          <div className="border border-gray-300 rounded-lg mt-4 p-2">
            <label className="font-semibold text-gray-700 mb-2 flex ">
              PICK UP WAIT TIME{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-4 ml-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>
              </span>
            </label>
            <div className="flex items-center border rounded px-3 py-2 space-x-2">
              {/* <MapPin size={18} className="text-gray-600" /> */}
              <img
                src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/carbon_time.svg"
                className="size-6"
              ></img>
              <input
                type="text"
                placeholder="Enter Pickup Address"
                className="w-full outline-none bg-transparent font-semibold text-gray-800"
              />
            </div>
          </div>
        </div>
      )}
      <div className="mt-4 p-2 border border-gray-300 rounded-lg text-center text-red-700 text-sm font-semibold">
        <h3>+ Customer Requirement</h3>
      </div>
    </div>
  );
}
