/*
  Warnings:

  - You are about to drop the column `local` on the `cinema` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cinema" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
INSERT INTO "new_cinema" ("id", "name") SELECT "id", "name" FROM "cinema";
DROP TABLE "cinema";
ALTER TABLE "new_cinema" RENAME TO "cinema";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
