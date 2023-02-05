/*
  Warnings:

  - You are about to drop the column `data` on the `session` table. All the data in the column will be lost.
  - Added the required column `date` to the `session` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "start_time" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "id_filme" TEXT NOT NULL,
    "id_cinema" TEXT NOT NULL
);
INSERT INTO "new_session" ("capacity", "id", "id_cinema", "id_filme", "start_time") SELECT "capacity", "id", "id_cinema", "id_filme", "start_time" FROM "session";
DROP TABLE "session";
ALTER TABLE "new_session" RENAME TO "session";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
