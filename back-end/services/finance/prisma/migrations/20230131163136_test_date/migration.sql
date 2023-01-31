-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_sales" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cinema_id" TEXT NOT NULL,
    "saleDate" DATETIME NOT NULL DEFAULT '2002-10-02 10:00:00 -05:00'
);
INSERT INTO "new_sales" ("cinema_id", "description", "id", "type", "value") SELECT "cinema_id", "description", "id", "type", "value" FROM "sales";
DROP TABLE "sales";
ALTER TABLE "new_sales" RENAME TO "sales";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
