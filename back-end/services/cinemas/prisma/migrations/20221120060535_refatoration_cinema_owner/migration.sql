-- CreateTable
CREATE TABLE "cinema" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "ownerEmail" TEXT NOT NULL,
    CONSTRAINT "cinema_ownerEmail_fkey" FOREIGN KEY ("ownerEmail") REFERENCES "owner" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "owner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "employeer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "cineId" TEXT NOT NULL,
    CONSTRAINT "employeer_cineId_fkey" FOREIGN KEY ("cineId") REFERENCES "cinema" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "owner_email_key" ON "owner"("email");

-- CreateIndex
CREATE UNIQUE INDEX "employeer_email_key" ON "employeer"("email");
