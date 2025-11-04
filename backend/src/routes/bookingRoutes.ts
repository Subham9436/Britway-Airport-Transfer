import express from "express";
import prisma from "../prisma/client.js";
import { bookingSchema } from "../types/types.js";

const router = express.Router();

router.post("/user", async (req, res) => {
  try {
    // validate incoming body
    const parsed = bookingSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        message: "Validation Error",
        
      });
    }

    const data = parsed.data;

    const booking = await prisma.booking.create({
      data: {
        tripType: data.tripType,
        dropType: data.dropType,

        pickupAirport: data.pickupAirport ?? null,
        dropAirport: data.dropAirport ?? null,
        pickupAddress: data.pickupAddress ?? null,
        dropoffAddress: data.dropoffAddress ?? null,
        flightNumber: data.flightNumber ?? null,
        pickupWaitTime: data.pickupWaitTime,
        customerRequirement: data.customerRequirement ?? null,

        pickupDate: new Date(data.pickupDate),
        pickupTime: data.pickupTime,

        passengers: data.passengers,
        checkInLuggage: data.checkInLuggage,
        handLuggage: data.handLuggage,

        fullName: data.fullName,
        email: data.email,
        countryCode: data.countryCode,
        phoneNumber: data.phoneNumber,
        agreedTerms: data.agreedTerms,

        vehicleId: data.vehicleId ?? null,
      },
    });

    return res.status(201).json(booking);
  } catch (err) {
    console.error("BOOKING CREATE ERROR => ", err);
    return res.status(500).json({ error: "Booking creation failed" });
  }
});

// GET ALL
router.get("/allUsers", async (_, res) => {
  try {
    const bookings = await prisma.booking.findMany();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Failed fetching bookings" });
  }
});

export default router;
