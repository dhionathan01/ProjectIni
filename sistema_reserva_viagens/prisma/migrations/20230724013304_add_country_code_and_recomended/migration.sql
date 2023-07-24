/*
  Warnings:

  - You are about to drop the column `contryCode` on the `Viagem` table. All the data in the column will be lost.
  - Added the required column `countryCode` to the `Viagem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Viagem" DROP COLUMN "contryCode",
ADD COLUMN     "countryCode" TEXT NOT NULL;
