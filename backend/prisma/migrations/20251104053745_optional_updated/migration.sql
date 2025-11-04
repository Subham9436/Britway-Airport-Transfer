/*
  Warnings:

  - Made the column `agreedTerms` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `countryCode` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fullName` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `Booking` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Booking" ALTER COLUMN "agreedTerms" SET NOT NULL,
ALTER COLUMN "countryCode" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "fullName" SET NOT NULL,
ALTER COLUMN "phoneNumber" SET NOT NULL;
