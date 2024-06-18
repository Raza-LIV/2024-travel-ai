-- CreateTable
CREATE TABLE "UserAccount" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "displaqName" TEXT NOT NULL,

    CONSTRAINT "UserAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAccount_email_key" ON "UserAccount"("email");
