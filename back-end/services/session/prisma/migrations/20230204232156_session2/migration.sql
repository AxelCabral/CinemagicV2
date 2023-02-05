/*
  Warnings:

  - You are about to drop the column `cinema_id` on the `Section` table. All the data in the column will be lost.
  - Added the required column `id_cinema` to the `Section` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Section" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL,
    "start_time" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "id_filme" TEXT NOT NULL,
    "id_cinema" TEXT NOT NULL
);
INSERT INTO "new_Section" ("capacity", "data", "id", "id_filme", "start_time") SELECT "capacity", "data", "id", "id_filme", "start_time" FROM "Section";
DROP TABLE "Section";
ALTER TABLE "new_Section" RENAME TO "Section";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
