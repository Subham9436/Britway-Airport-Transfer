/*
  Warnings:

  - You are about to drop the column `dropoffLocation` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `dropType` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dropoffAddress` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `pickupDate` on the `Booking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "dropoffLocation",
ADD COLUMN     "dropType" TEXT NOT NULL,
ADD COLUMN     "dropoffAddress" TEXT NOT NULL,
DROP COLUMN "pickupDate",
ADD COLUMN     "pickupDate" TIMESTAMP(3) NOT NULL;
