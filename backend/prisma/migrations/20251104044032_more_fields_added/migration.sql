-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "dropoffLocation" TEXT,
ADD COLUMN     "pickupAddress" TEXT,
ALTER COLUMN "pickupLocation" DROP NOT NULL,
ALTER COLUMN "dropoffAddress" DROP NOT NULL;
