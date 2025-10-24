import { useState } from "react";
import { airports } from "../constants/constantValues";
import { Briefcase, Calendar, Clock, ShoppingBag, Users } from "lucide-react";

export default function BookingForm() {
  const [tripType, setTripType] = useState("airport-pickup");
  const [dropType, setDropType] = useState("local-drop");
  const [customerRequirement, setCustomerRequirement] = useState(
    "customer-requirement"
  );
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [passengers, setPassengers] = useState("");
  const [checkInLuggage, setCheckInLuggage] = useState("");
  const [handLuggage, setHandLuggage] = useState("");

  const passengerOptions = ["1", "2", "3", "4", "5+"];
  const luggageOptions = ["0", "1", "2", "3", "4+"];
  const waitTimes = Array.from({ length: 25 }, (_, i) => i * 5); // [0, 5, 10, ... 120]
  const [selectedWait, setSelectedWait] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: number) => {
    setSelectedWait(value);
    setIsOpen(false);
  };

  return (
    <div className="border border-gray-300  rounded-lg shadow-md overflow-hidden mb-6 p-4">
      <div className="w-full">
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

              <div className="flex items-center border border-gray-300 rounded px-3 py-2 space-x-2 bg-gray-50">
                {/* Location icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>

                {/* Airport dropdown */}
                <select className="w-full outline-none bg-transparent font-semibold text-gray-800 cursor-pointer appearance-none">
                  <option value="">--Select Airport--</option>
                  {airports.map((airport, index) => (
                    <option
                      key={index}
                      value={airport}
                      className="bg-white text-gray-800 hover:bg-red-700 hover:text-white focus:bg-red-700 focus:text-white"
                    >
                      {airport}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                PICK UP ADDRESS <span className="text-red-600">*</span>
              </label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2 space-x-2 bg-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
      <div className="w-full  mt-4">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                DROP OFF <span className="text-red-600">*</span>
              </label>
              <div className="flex items-center border rounded px-3 py-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
          <div className="border border-gray-300 rounded-lg mt-4 p-3 bg-white shadow-sm">
            <label className="font-semibold text-gray-700 mb-2 flex items-center">
              PICK UP WAIT TIME
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 ml-1 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
            </label>

            <div className="relative">
              {/* Select box */}
              <div
                className="flex items-center justify-between border rounded px-3 py-2 bg-gray-50 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/carbon_time.svg"
                    alt="clock"
                    className="size-6"
                  />
                  <span className="font-semibold text-gray-800">
                    {selectedWait !== null
                      ? `${selectedWait} min`
                      : "Select wait time"}
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`size-4 text-gray-600 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Dropdown menu */}
              {isOpen && (
                <ul className="absolute z-10 mt-2 w-full border rounded bg-white shadow-lg max-h-60 overflow-y-auto">
                  {waitTimes.map((min) => (
                    <li
                      key={min}
                      onClick={() => handleSelect(min)}
                      className={`px-4 py-2 cursor-pointer font-medium ${
                        selectedWait === min
                          ? null
                          : "hover:bg-red-700 text-gray-800 hover:text-white "
                      }`}
                    >
                      {min} min
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
      <div
        className="mt-4 p-2 border border-gray-300 rounded-lg text-center text-red-700 text-sm font-semibold"
        style={{ cursor: "pointer" }}
      >
        <h3 onClick={() => setCustomerRequirement("customer-field")}>
          + Customer Requirement
        </h3>
      </div>
      <div>
        {customerRequirement === "customer-field" && (
          <div className="border border-gray-300 rounded-lg mt-4 p-2">
            <label className="flex justify-between font-semibold text-gray-700 mb-2 ">
              <h3>
                Customer Requirement <span className="text-red-600">*</span>
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
                onClick={() => setCustomerRequirement("customer-requirement")}
                style={{ cursor: "pointer" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </label>
            <div className="flex items-center border rounded px-3 py-2 space-x-2">
              <textarea
                rows={4}
                placeholder="Please provide any additional information about your trip, special requests, additional phone number or pickup instructions..."
                className="w-full outline-none bg-transparent font-semibold text-gray-800"
              ></textarea>
            </div>
          </div>
        )}
      </div>
      <div className=" bg-white space-y-4 mt-4">
        {/* Row 1: Pickup Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Pickup Date */}
          <div className="flex flex-col border border-gray-300 rounded-md p-3">
            <label className="text-sm font-semibold text-gray-700">
              PICKUP DATE <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center gap-2 mt-1">
              <Calendar className="w-5 h-5 text-gray-600" />
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="flex-1 border-none focus:ring-0 text-gray-800 font-medium"
              />
            </div>
          </div>

          {/* Pickup Time */}
          <div className="flex flex-col border border-gray-300 rounded-md p-3">
            <label className="text-sm font-semibold text-gray-700">
              PICKUP TIME <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center gap-2 mt-1">
              <Clock className="w-5 h-5 text-gray-600" />
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="flex-1 border-none focus:ring-0 text-gray-800 font-medium"
              />
            </div>
          </div>
        </div>

        {/* Passengers */}
        <div className="flex flex-col border border-gray-300 rounded-md p-3">
          <label className="text-sm font-semibold text-gray-700">
            PASSENGERS (INCLUDING CHILDREN){" "}
            <span className="text-red-600">*</span>
          </label>
          <div className="flex items-center gap-2 mt-1">
            <Users className="w-5 h-5 text-gray-600" />
            <select
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="flex-1 border-none focus:ring-0 text-gray-800 font-medium"
            >
              <option value="">--Select--</option>
              {passengerOptions.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Check-in Luggage */}
        <div className="flex flex-col border border-gray-300 rounded-md p-3">
          <label className="text-sm font-semibold text-gray-700">
            NUMBER OF CHECK-IN LUGGAGE <span className="text-red-600">*</span>
          </label>
          <div className="flex items-center gap-2 mt-1">
            <Briefcase className="w-5 h-5 text-gray-600" />
            <select
              value={checkInLuggage}
              onChange={(e) => setCheckInLuggage(e.target.value)}
              className="flex-1 border-none focus:ring-0 text-gray-800 font-medium"
            >
              <option value="">--Select--</option>
              {luggageOptions.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Hand Luggage */}
        <div className="flex flex-col border border-gray-300 rounded-md p-3">
          <label className="text-sm font-semibold text-gray-700">
            NUMBER OF HAND LUGGAGE <span className="text-red-600">*</span>
          </label>
          <div className="flex items-center gap-2 mt-1">
            <ShoppingBag className="w-5 h-5 text-gray-600" />
            <select
              value={handLuggage}
              onChange={(e) => setHandLuggage(e.target.value)}
              className="flex-1 border-none focus:ring-0 text-gray-800 font-medium"
            >
              <option value="">--Select--</option>
              {luggageOptions.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
