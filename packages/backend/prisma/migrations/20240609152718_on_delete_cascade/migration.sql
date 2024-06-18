-- DropForeignKey
ALTER TABLE "PlanOfDay" DROP CONSTRAINT "PlanOfDay_travelId_fkey";

-- DropForeignKey
ALTER TABLE "Travel" DROP CONSTRAINT "Travel_userId_fkey";

-- AddForeignKey
ALTER TABLE "Travel" ADD CONSTRAINT "Travel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanOfDay" ADD CONSTRAINT "PlanOfDay_travelId_fkey" FOREIGN KEY ("travelId") REFERENCES "Travel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
