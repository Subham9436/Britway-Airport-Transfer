/*
  Warnings:

  - You are about to drop the column `dropoffLocation` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `pickupLocation` on the `Booking` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "dropoffLocation",
DROP COLUMN "pickupLocation",
ADD COLUMN     "dropAirport" TEXT,
ADD COLUMN     "pickupAirport" TEXT,
ADD COLUMN     "vehicleId" INTEGER,
ALTER COLUMN "flightNumber" DROP NOT NULL;
