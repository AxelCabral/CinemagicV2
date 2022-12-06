/*
  Warnings:

  - You are about to drop the column `emailL` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `passwordL` on the `user` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    CONSTRAINT "user_email_password_fkey" FOREIGN KEY ("email", "password") REFERENCES "login" ("loginEmail", "loginPassword") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_user" ("age", "email", "id", "name", "password") SELECT "age", "email", "id", "name", "password" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
