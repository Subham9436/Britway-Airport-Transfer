import React, { createContext, useContext, useState } from "react";

type BookingData = {
  tripType: string;
  dropType: string;
  pickupDate: string;
  pickupTime: string;
  passengers: string;
  checkInLuggage: string;
  handLuggage: string;
  pickupAirport: string;
  dropAirport: string;
};

type BookingContextType = {
  booking: BookingData;
  setBooking: React.Dispatch<React.SetStateAction<BookingData>>;
  updateBookingField: <K extends keyof BookingData>(key: K, value: BookingData[K]) => void;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [booking, setBooking] = useState<BookingData>({
    tripType: "airport",
    dropType: "local",
    pickupDate: "",
    pickupTime: "",
    passengers: "",
    checkInLuggage: "",
    handLuggage: "",
    pickupAirport: "",
    dropAirport: "",
  });

  // helper: update any field dynamically
  const updateBookingField = <K extends keyof BookingData>(
    key: K,
    value: BookingData[K]
  ) => {
    setBooking((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <BookingContext.Provider value={{ booking, setBooking, updateBookingField }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking must be used within BookingProvider");
  return context;
};
export const useFormContext = () => {
  const context = useContext(BookingContext);
    if (!context) {
        throw new Error("useFormContext must be used within a BookingProvider");
    }
    return {
        updateForm: context.updateBookingField,
        bookingData: context.booking,
    };
}