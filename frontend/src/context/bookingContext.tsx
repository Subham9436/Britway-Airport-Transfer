import React, { createContext, useContext, useState } from "react";
import { countryCodes } from "../components/countryCode";

export type BookingData = {
  tripType: string;
  dropType: string;
  pickupDate: string;
  pickupTime: string;
  passengers: string;
  checkInLuggage: string;
  handLuggage: string;
  pickupAirport?: string;
  dropAirport?: string;
  pickupAddress?: string;
  dropoffAddress?: string;
  flightNumber?: string;
  pickupWaitTime?: string;
  customerRequirement?: string;

  fullName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  agreedTerms: boolean;
};

const initialState: BookingData = {
  tripType: "airport",
  dropType: "local",
  pickupDate: "",
  pickupTime: "",
  passengers: "",
  checkInLuggage: "",
  handLuggage: "",
  pickupAirport: "",
  dropAirport: "",
  pickupAddress: "",
  dropoffAddress: "",
  flightNumber: "",
  pickupWaitTime: "",
  customerRequirement: "",
  fullName: "",
  email: "",
  countryCode: countryCodes[74].dial,
  phoneNumber: "",
  agreedTerms: false,
};

type BookingContextType = {
  booking: BookingData;
  setBooking: React.Dispatch<React.SetStateAction<BookingData>>;
  updateBookingField: <K extends keyof BookingData>(
    key: K,
    value: BookingData[K]
  ) => void;
  resetBooking: () => void;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [booking, setBooking] = useState<BookingData>(initialState);

  const updateBookingField = <K extends keyof BookingData>(
    key: K,
    value: BookingData[K]
  ) => {
    setBooking((prev) => ({ ...prev, [key]: value }));
  };

  const resetBooking = () => {
    setBooking(initialState);
  };

  return (
    <BookingContext.Provider
      value={{ booking, setBooking, updateBookingField, resetBooking }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context)
    throw new Error("useBooking must be used within BookingProvider");
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
};
