/*
  Warnings:

  - Added the required column `hostNumber` to the `PlotofLand` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PlotofLand" ADD COLUMN     "hostNumber" TEXT NOT NULL;
