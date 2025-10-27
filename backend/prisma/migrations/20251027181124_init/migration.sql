-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "tripType" TEXT NOT NULL,
    "pickupLocation" TEXT NOT NULL,
    "dropoffLocation" TEXT NOT NULL,
    "flightNumber" TEXT NOT NULL,
    "pickupWaitTime" TEXT NOT NULL,
    "customerRequirement" TEXT,
    "pickupDate" TEXT NOT NULL,
    "pickupTime" TEXT NOT NULL,
    "passengers" INTEGER NOT NULL,
    "checkinLuggage" INTEGER NOT NULL,
    "handLuggage" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);
