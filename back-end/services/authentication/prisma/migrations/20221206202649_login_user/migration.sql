/*
  Warnings:

  - You are about to drop the `register` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `userEmail` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `userPassword` on the `user` table. All the data in the column will be lost.
  - Added the required column `age` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailL` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordL` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "register_registerEmail_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "register";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "emailL" TEXT NOT NULL,
    "passwordL" TEXT NOT NULL,
    CONSTRAINT "user_emailL_passwordL_fkey" FOREIGN KEY ("emailL", "passwordL") REFERENCES "login" ("loginEmail", "loginPassword") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_user" ("id") SELECT "id" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
CREATE TABLE "new_login" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "loginEmail" TEXT NOT NULL,
    "loginPassword" TEXT NOT NULL
);
INSERT INTO "new_login" ("id", "loginEmail", "loginPassword") SELECT "id", "loginEmail", "loginPassword" FROM "login";
DROP TABLE "login";
ALTER TABLE "new_login" RENAME TO "login";
CREATE UNIQUE INDEX "login_loginEmail_key" ON "login"("loginEmail");
CREATE UNIQUE INDEX "login_loginEmail_loginPassword_key" ON "login"("loginEmail", "loginPassword");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
