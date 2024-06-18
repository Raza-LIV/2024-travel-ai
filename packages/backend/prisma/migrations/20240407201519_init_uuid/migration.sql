/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateTable
CREATE TABLE "Travel" (
    "id" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT,
    "city" TEXT,
    "date" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "food" BOOLEAN NOT NULL,
    "art" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Travel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Travel" ADD CONSTRAINT "Travel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
