/*
  Warnings:

  - Added the required column `favorite` to the `Travel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Travel" ADD COLUMN     "favorite" BOOLEAN NOT NULL;
