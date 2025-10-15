import VehicleList from "../constants";
import BookingForm from "./bookingform";
import { BenefitCard,} from "./benefitscard";
import { Extra } from "./extra";
import { InfoCard } from "./infocard";
import { ExpCard } from "./expcard";

export function Card() {
  return (
    <div className=" p-6 m-4">
      <div>
        Provide your journey details to receive an instant quote and book your
        transfer. If you have any questions, feel free to use the chat button or
        give us a call. For more complex quotes, please use our Contact Form.
      </div>
      <div>
        <BookingForm />
        <h3 className="text-4xl mt-2">Available Vehicles :</h3>
        <VehicleList />
        <h3 className="font-semibold text-3xl text-end">TOTAL FARE: £0</h3>
        <Extra/>
        <InfoCard/>
        <ExpCard/>
        <BenefitCard/>
      </div>
    </div>
  );
}
