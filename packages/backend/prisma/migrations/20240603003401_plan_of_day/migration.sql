-- AddForeignKey
ALTER TABLE "PlanOfDay" ADD CONSTRAINT "PlanOfDay_travelId_fkey" FOREIGN KEY ("travelId") REFERENCES "Travel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;