import { useState } from "react";
import { countryCodes } from "./countryCode";
import toast from "react-hot-toast";
import { useSubmitBooking } from "../context/postContext";

export function Extra() {
  const [countryCode, setCountryCode] = useState(countryCodes[0].dial);
  const { submitBooking } = useSubmitBooking();

  const handleSubmit = async () => {
  try {
    toast.loading("Submitting...");
    await submitBooking();
    toast.dismiss();
    toast.success("Booking Created ");
  } catch (err) {
    toast.dismiss();
    toast.error("Failed to create booking ");
  }
};

  return (
    <div>
      <div className=" border border-gray-300  rounded-lg shadow-md overflow-hidden p-4 mt-12">
        <div>
          <h1 className="font-bold text-2xl">EXTRAS</h1>
        </div>
        <div className="border border-gray-300 mt-4 p-4 rounded-lg space-y-4">
          <div className="flex text-2xl font-semibold">
            Child seat <h3 className="text-red-700 ml-2">Free*</h3>
          </div>
          <div>Suitble for toddlers weighing 0-18kg (approx 0 to 4 years).</div>
          <div className="">
            <select className="w-full border rounded p-2">
              <option>--Select--</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>
        <div className="border border-gray-300 mt-4 p-4 rounded-lg space-y-4">
          <div className="flex text-2xl font-semibold">
            Booster seat <h3 className="text-red-700 ml-2">Free*</h3>
          </div>
          <div>
            Suitble for children weighing 15-36kg (approx 4 to 10 years).
          </div>
          <div className="">
            <select className="w-full border rounded p-2">
              <option>--Select--</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>
        <h3 className="text-sm mt-8 m-4">
          *Free Child seats and Booster Seats will be provided Free of charge
          but they are subject to availability. We cannot guarantee their
          availability, but we will inform you if they become unavailable before
          the trip.
        </h3>
      </div>
      <div className=" border border-gray-300  rounded-lg shadow-md overflow-hidden p-4 mt-12">
        <div>
          <h1 className="font-bold text-2xl">PASSENGER DETAILS</h1>
        </div>
        <div className="text-sm mt-2">
          By booking with us and providing your personal details, you
          acknowledge that you have read and understood our Terms and
          Conditions.
        </div>
        <div className="mt-4 space-y-4">
          <div>
            <label className="flex">
              Full Name<h3 className="text-red-700">*</h3>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full border rounded p-2 border-gray-300"
            ></input>
          </div>
          <div>
            <label className="flex">
              Email<h3 className="text-red-700">*</h3>
            </label>
            <input
              type="text"
              placeholder="Enter your email address"
              required
              className="w-full border rounded p-2 border-gray-300"
            ></input>
          </div>
          <div className="flex flex-col gap-2  mx-auto">
            <label className=" text-gray-700 flex">
              Phone Number<h3 className="text-red-700">*</h3>
            </label>

            <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className=" rounded p-2"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.dial}>
                    {String.fromCodePoint(
                      ...[...c.code].map((ch) => ch.charCodeAt(0) + 127397)
                    )}{" "}
                    {c.dial}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                className="flex-1 px-3 py-2 text-sm focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-2 p-2">
          <input type="checkbox" className="size-5"></input>
          <h3 className="flex">
            I agree with the{" "}
            <a href="https://britwayairporttransfer.co.uk/tc/?_gl=1*1d0ap5t*_gcl_au*MTkyNDM4MzQyOS4xNzU4ODEyNjU3">
              <h3 className="text-red-700 ml-1 underline-offset-2 underline decoration-1  ">
                Terms and Conditions
              </h3>
            </a>
          </h3>
        </div>
        <button
          onClick={handleSubmit}
          style={{ cursor: "pointer" }}
          className="mt-8 w-full border p-4 px-6 bg-red-700 text-white text-sm md:text-base font-semibold rounded-lg"
        >
          Review and Make Payment
        </button>
      </div>
      <div className=" border border-gray-300  rounded-lg shadow-md overflow-hidden p-4 mt-12 mb-12">
        <div className="border bg-red-100 border-red-300">
          <div className="flex gap-2 text-red-700 p-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="text-red-700 font-semibold">*Free Waiting Time</h3>
          </div>
          <div className="text-sm sm:text-base text-gray-700 leading-relaxed flex flex-wrap items-center gap-1 p-2">
            <span className="text-sm">
              For Airport Pickups 30 minutes and for Local Pickups 15 minutes.
              Please see our
            </span>
            <a
              href="https://britwayairporttransfer.co.uk/tc/?_gl=1*1d0ap5t*_gcl_au*MTkyNDM4MzQyOS4xNzU4ODEyNjU3"
              className="text-red-700 underline underline-offset-2 decoration-1 hover:text-red-800 transition-colors text-sm"
            >
              Terms and Conditions
            </a>
            <span className="text-sm">for more information.</span>
          </div>
        </div>
        <div className="border bg-red-100 mt-8 border-red-300">
          <div className="flex gap-2 text-red-700 p-2  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="text-red-700 font-semibold">*Free Cancellation</h3>
          </div>
          <div className="text-sm sm:text-base text-gray-700 leading-relaxed flex-wrap items-center gap-1 p-2">
            <span className="text-sm">
              Book today, lock the price. You can cancel for free up to 24 hours
              prior the pickup and get a refund. See our
            </span>
            <a
              href="https://britwayairporttransfer.co.uk/tc/?_gl=1*10rea83*_gcl_au*MTkyNDM4MzQyOS4xNzU4ODEyNjU3"
              className="text-red-700 underline underline-offset-2 decoration-1 hover:text-red-800 transition-colors text-sm ml-1"
            >
              Cancellation Policy
            </a>
            <span className="text-sm ml-1">to get more information.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
