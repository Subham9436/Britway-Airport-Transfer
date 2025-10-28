import express from "express";
import prisma from "../prisma/client.js";

const router = express.Router();

// POST: Create Booking
router.post("/", async (req, res) => {
  try {
    const {
      tripType,
      dropType,
      pickupLocation,
      dropoffAddress,
      flightNumber,
      pickupWaitTime,
      customerRequirement,
      pickupDate,
      pickupTime,
      passengers,
      checkinLuggage,
      handLuggage,
    } = req.body;

    const booking = await prisma.booking.create({
      data: {
        tripType,
        dropType,
        pickupLocation,
        dropoffAddress,
        flightNumber,
        pickupWaitTime,
        customerRequirement,
        pickupDate: new Date(pickupDate),
        pickupTime,
        passengers,
        checkinLuggage,
        handLuggage,
      },
    });

    res.status(201).json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

// GET: All Bookings
router.get("/", async (_, res) => {
  const bookings = await prisma.booking.findMany();
  res.json(bookings);
});

export default router;
