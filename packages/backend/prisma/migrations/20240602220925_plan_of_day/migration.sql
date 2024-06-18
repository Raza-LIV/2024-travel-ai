/*
  Warnings:

  - You are about to drop the `DayOfPlan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "DayOfPlan";

-- CreateTable
CREATE TABLE "PlanOfDay" (
    "id" TEXT NOT NULL,
    "travelId" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "PlanOfDay_pkey" PRIMARY KEY ("id")
);
