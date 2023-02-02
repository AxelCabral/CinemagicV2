/*
  Warnings:

  - You are about to drop the column `comboID` on the `products` table. All the data in the column will be lost.
  - Added the required column `userID` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "comboProducts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productID" TEXT NOT NULL,
    "comboID" TEXT NOT NULL,
    CONSTRAINT "comboProducts_productID_fkey" FOREIGN KEY ("productID") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "comboProducts_comboID_fkey" FOREIGN KEY ("comboID") REFERENCES "combo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_sales" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cinema_id" TEXT NOT NULL,
    "saleDate" DATETIME NOT NULL,
    "userID" TEXT NOT NULL
);
INSERT INTO "new_sales" ("cinema_id", "description", "id", "saleDate", "type", "value") SELECT "cinema_id", "description", "id", "saleDate", "type", "value" FROM "sales";
DROP TABLE "sales";
ALTER TABLE "new_sales" RENAME TO "sales";
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "urlImg" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_products" ("id", "name", "price", "urlImg") SELECT "id", "name", "price", "urlImg" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
