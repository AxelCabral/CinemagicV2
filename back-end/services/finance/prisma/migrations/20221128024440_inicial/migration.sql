-- CreateTable
CREATE TABLE "sales" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cinema_id" TEXT NOT NULL,
    CONSTRAINT "sales_cinema_id_fkey" FOREIGN KEY ("cinema_id") REFERENCES "cinema" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "cinema" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "local" TEXT NOT NULL
);
