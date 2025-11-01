import VehicleList from "../constants";
import BookingForm from "./bookingform";
import { BenefitCard } from "./benefitscard";
import { Extra } from "./extra";
import { InfoCard } from "./infocard";
import { ExpCard } from "./expcard";
import { QuestionCard } from "./questionsCard";
import { LocationMap } from "./googleMap";
import { BookingProvider } from "../context/bookingContext";
import { VehicleProvider } from "../context/vehicleContext";

export function Card() {
  return (
    <BookingProvider>
      <VehicleProvider>
        <div className=" p-6 m-4">
          <div>
            Provide your journey details to receive an instant quote and book
            your transfer. If you have any questions, feel free to use the chat
            button or give us a call. For more complex quotes, please use our
            Contact Form.
          </div>
          <div className="md:flex mt-4 justify-between gap-6">
            <div>
              <div>
                <BookingForm />
              </div>
              <h3 className="text-4xl mt-2">Available Vehicles :</h3>
              <VehicleList />
              <h3 className="font-semibold text-3xl text-end">
                TOTAL FARE: £0
              </h3>
              <Extra />
            </div>

            <div>
              <LocationMap />
              <InfoCard />
              <ExpCard />
              <BenefitCard />
              <QuestionCard />
              <div className="md:max-w-xl mx-auto mt-6 border border-gray-300 rounded-2xl shadow-md overflow-hidden">
                <div className="bg-red-700 rounded-t-lg p-4 font-semibold text-xl text-white">
                  Free Cancellation 24 Hour
                </div>
                <div className="bg-black p-4 space-y-2 rounded-b-lg text-white ">
                  <h3>
                    Book today, lock the price. You can cancel for free up to 24
                    hours prior the pickup and get a refund. See our
                    Cancellation Policy to get more information
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VehicleProvider>
    </BookingProvider>
  );
}
