import axios from "axios";
import { useBooking } from "./bookingContext";
import { useVehicle } from "./vehicleContext";

const API_BASE = "http://localhost:4000"; // change to your url

export const useSubmitBooking = () => {
  const { booking } = useBooking();
  const { selectedVehicle } = useVehicle();

  const submitBooking = async () => {
    try {
      const payload = {
        ...booking, // tripType, pickupDate, etc

        vehicleId: selectedVehicle?.id ?? null,
      };

      const res = await axios.post(`${API_BASE}/User`, payload);

      return res.data;
    } catch (err) {
      console.log("Booking submit error", err);
      throw err;
    }
  };

  return { submitBooking };
};
