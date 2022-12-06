/*
  Warnings:

  - You are about to drop the `Purchase` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Purchase";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "login" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "loginEmail" TEXT NOT NULL,
    "loginPassword" TEXT NOT NULL,
    CONSTRAINT "login_loginEmail_loginPassword_fkey" FOREIGN KEY ("loginEmail", "loginPassword") REFERENCES "user" ("userEmail", "userPassword") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "register" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "registerEmail" TEXT NOT NULL,
    "registerPassword" TEXT NOT NULL,
    "registerName" TEXT NOT NULL,
    "registerAge" INTEGER NOT NULL,
    "emailLR" TEXT NOT NULL,
    "passwordLR" TEXT NOT NULL,
    CONSTRAINT "register_emailLR_passwordLR_fkey" FOREIGN KEY ("emailLR", "passwordLR") REFERENCES "login" ("loginEmail", "loginPassword") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userEmail" TEXT NOT NULL,
    "userPassword" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "login_loginEmail_key" ON "login"("loginEmail");

-- CreateIndex
CREATE UNIQUE INDEX "login_loginEmail_loginPassword_key" ON "login"("loginEmail", "loginPassword");

-- CreateIndex
CREATE UNIQUE INDEX "register_registerEmail_key" ON "register"("registerEmail");

-- CreateIndex
CREATE UNIQUE INDEX "user_userEmail_key" ON "user"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "user_userEmail_userPassword_key" ON "user"("userEmail", "userPassword");
