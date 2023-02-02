-- CreateTable
CREATE TABLE "combo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "urlImg" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "urlImg" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "name" TEXT NOT NULL,
    "comboID" TEXT,
    CONSTRAINT "products_comboID_fkey" FOREIGN KEY ("comboID") REFERENCES "combo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_products" ("id", "name", "price", "urlImg") SELECT "id", "name", "price", "urlImg" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
