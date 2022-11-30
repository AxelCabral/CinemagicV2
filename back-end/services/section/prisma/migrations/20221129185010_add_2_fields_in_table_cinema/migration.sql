/*
  Warnings:

  - You are about to drop the column `regiao` on the `Cinema` table. All the data in the column will be lost.
  - Added the required column `Estado` to the `Cinema` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `Cinema` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cinema" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "Estado" TEXT NOT NULL,
    "IdSecao" TEXT NOT NULL
);
INSERT INTO "new_Cinema" ("IdSecao", "endereco", "id", "name") SELECT "IdSecao", "endereco", "id", "name" FROM "Cinema";
DROP TABLE "Cinema";
ALTER TABLE "new_Cinema" RENAME TO "Cinema";
CREATE UNIQUE INDEX "Cinema_name_key" ON "Cinema"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
