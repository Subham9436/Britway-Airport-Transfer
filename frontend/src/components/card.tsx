import VehicleList from "../constants";
import BookingForm from "./bookingform";

export function Card() {
  return (
    <div className="border border-gray-300 p-6 m-4 rounded-lg  shadow-2xl">
      <div>
        Provide your journey details to receive an instant quote and book your
        transfer. If you have any questions, feel free to use the chat button or
        give us a call. For more complex quotes, please use our Contact Form.
      </div>
      <div>
        <BookingForm />
        <VehicleList />
      </div>
    </div>
  );
}
