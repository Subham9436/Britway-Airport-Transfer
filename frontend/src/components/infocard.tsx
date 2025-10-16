import { details } from "../constants/constantValues";

export function InfoCard() {
  return (
    <div className=" md:max-w-xl mx-auto mt-6 border border-gray-300 rounded-2xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-red-700 px-5 py-3 text-white text-lg sm:text-xl font-semibold text-center">
        Departure Journey
      </div>

      {/* Body */}
      <div className="bg-black px-4 sm:px-6 py-5 space-y-4">
        {/* Pickup */}
        <div className="flex items-center gap-3 text-red-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 sm:w-7 sm:h-7"
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
          <h3 className="text-white text-sm sm:text-base font-medium">
            Pickup location not selected
          </h3>
        </div>

        {/* Drop-off */}
        <div className="flex items-center gap-3 text-red-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 sm:w-7 sm:h-7"
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
          <h3 className="text-white text-sm sm:text-base font-medium">
            Drop-off location not selected
          </h3>
        </div>

        {/* Date & Time */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
          <div className="flex-1 bg-white flex items-center gap-3 p-3 sm:p-4 rounded-lg shadow-sm">
            <img
              src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/guidance_calendar.svg"
              alt="Calendar"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <h3 className="text-black text-sm sm:text-base font-semibold">
              Date not selected
            </h3>
          </div>

          <div className="flex-1 bg-white flex items-center gap-3 p-3 sm:p-4 rounded-lg shadow-sm">
            <img
              src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/clock.svg"
              alt="Clock"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <h3 className="text-black text-sm sm:text-base font-semibold">
              Time not selected
            </h3>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-600" />

      {/* Vehicle Details */}
      <div className="bg-black px-4 sm:px-6 py-5 space-y-3 sm:space-y-4 rounded-b-2xl">
        {details.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <img
              src={item.icon}
              alt={item.label}
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <h3 className="text-white text-sm sm:text-base">{item.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
