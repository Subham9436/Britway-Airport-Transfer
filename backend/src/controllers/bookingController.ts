import type { Request, Response } from "express";
import prisma from "../prisma/client.js";

export const createBooking = async (req: Request, res: Response) => {
  try {
    const booking = await prisma.booking.create({ data: req.body });
    res.status(201).json(booking);
  } catch (error) {
    console.error("Booking creation error:", error);
    res.status(500).json({ error: "Failed to create booking" });
  }
};

export const getAllBookings = async (_req: Request, res: Response) => {
  try {
    const bookings = await prisma.booking.findMany();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};
