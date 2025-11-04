import axios from "axios";
import { useBooking } from "./bookingContext";
import { useVehicle } from "./vehicleContext";

const API_BASE = "http://localhost:5000"; 

export const useSubmitBooking = () => {
  const { booking } = useBooking();
  const { selectedVehicle } = useVehicle();

  const submitBooking = async () => {
    if (!selectedVehicle) {
      throw new Error("Vehicle Not Selected");
    }

    const payload = {
      ...booking,
      vehicleId: selectedVehicle?.id ?? null,
    };

    console.log("PAYLOAD SENDING →", payload);

    try {
      const res = await axios.post(`${API_BASE}/api/bookings/user`, payload);

      return res.data;
    } catch (err) {
      console.log("Booking submit error → ", err);
      throw err;
    }
  };

  return { submitBooking };
};
