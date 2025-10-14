export function InfoCard() {
  return (
    
    <div className="border border-gray-300 rounded-lg shadow-lg mx-auto">
      <div className="bg-red-700 rounded-t-lg text-white p-4 font-semibold text-xl">
        Departure Journey
      </div>
      <div className=" bg-black p-4 ">
        <div className="text-red-700 flex space-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-8"
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
          <div>
            <h3 className="text-white font-semibold">
              {" "}
              Pickup location not selected
            </h3>
          </div>
        </div>

        <div className="text-red-700 flex space-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-8"
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
          <div>
            <h3 className="text-white font-semibold">
              {" "}
              Drop-off location not selected
            </h3>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="bg-white flex items-center space-x-4 mt-4 p-4 rounded-lg justify-center w-68">
            <img
              src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/guidance_calendar.svg"
              alt="No vehicle selected"
              className=" bg-white size-8"
            ></img>
            <h3 className="text-black font-semibold mt-2 mb-2">
              {" "}
              Date not selected
            </h3>
          </div>
          <div className="bg-white flex items-center space-x-4 mt-4 p-4 rounded-lg justify-center ml-2 w-68">
            <img
              src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/clock.svg"
              alt="No vehicle selected"
              className=" bg-white size-8"
            ></img>
            <h3 className="text-black font-semibold mt-2 mb-2">
              {" "}
              Time not selected
            </h3>
          </div>
        </div>
      </div>
      <hr className="text-white"></hr>
      <div className="bg-black rounded-b-lg p-4">
        <div className="mx-2 flex items-center space-x-2">
          <img
            src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/car.svg"
            className="size-10"
          ></img>
          <h3 className="text-white ">Vehicle</h3>
        </div>
        <div className="mx-2 flex items-center space-x-2">
          <img
            src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/pasangers.svg"
            className="size-10"
          ></img>
          <h3 className="text-white ">0 Passengers</h3>
        </div>
         <div className="mx-2 flex items-center space-x-2">
          <img
            src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/miles.svg"
            className="size-10"
          ></img>
          <h3 className="text-white ">0km/0miles</h3>
        </div>
         <div className="mx-2 flex items-center space-x-2">
          <img
            src="https://bookingform.britwayairporttransfer.co.uk/assets/front/images/clarity_clock-line.svg"
            className="size-10"
          ></img>
          <h3 className="text-white ">0hr 00min</h3>
        </div>
      </div>
    </div>
  );
}
