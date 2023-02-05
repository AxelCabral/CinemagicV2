-- CreateTable
CREATE TABLE "Section" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data" DATETIME NOT NULL,
    "start_time" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "id_filme" TEXT NOT NULL,
    "cinema_id" TEXT NOT NULL
);
