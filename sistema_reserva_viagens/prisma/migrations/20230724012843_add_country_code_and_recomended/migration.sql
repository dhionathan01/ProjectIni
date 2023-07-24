/*
  Warnings:

  - Added the required column `contryCode` to the `Viagem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Viagem" ADD COLUMN     "contryCode" TEXT NOT NULL,
ADD COLUMN     "recommended" BOOLEAN NOT NULL DEFAULT false;
