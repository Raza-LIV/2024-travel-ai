/*
  Warnings:

  - Added the required column `updatedAt` to the `Travel` table without a default value. This is not possible if the table is not empty.
  - Made the column `state` on table `Travel` required. This step will fail if there are existing NULL values in that column.
  - Made the column `city` on table `Travel` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `date` on the `Travel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Travel" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "state" SET NOT NULL,
ALTER COLUMN "city" SET NOT NULL,
DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;
