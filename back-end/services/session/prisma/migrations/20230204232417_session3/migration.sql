/*
  Warnings:

  - You are about to drop the `Section` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Section";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL,
    "start_time" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "id_filme" TEXT NOT NULL,
    "id_cinema" TEXT NOT NULL
);
