import { z } from "zod";

export const bookingSchema = z.object({
  tripType: z.string().min(1, "tripType required"),
  dropType: z.string().min(1, "dropType required"),

  // location fields
  pickupAirport: z.string().optional(),
  dropAirport: z.string().optional(),
  pickupAddress: z.string().optional(),
  dropoffAddress: z.string().optional(),
  flightNumber: z.string().optional(),

  pickupWaitTime: z.string().min(1, "wait time is required"),
  customerRequirement: z.string().optional(),

  pickupDate: z.string().min(1, "pickup date required"), // convert in backend before insert
  pickupTime: z.string().min(1, "pickup time required"),

  passengers: z.string().min(1, "passengers required"),
  checkInLuggage: z.string().min(1, "check in luggage required"),
  handLuggage: z.string().min(1, "hand luggage required"),

  // passenger fields
  fullName: z.string().min(1, "name required"),
  email: z.string().email("Invalid Email"),
  countryCode: z.string().min(1, "country code required"),
  phoneNumber: z.string().min(5, "phone number required"),
  agreedTerms: z.boolean().refine((v) => v === true, "You must agree to terms"),

  // vehicle selection
  vehicleId: z.number().optional(),
});

export type BookingType = z.infer<typeof bookingSchema>;
